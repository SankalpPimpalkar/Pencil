import connectdb from '@/app/lib/connectdb';
import User from '@/app/models/user.model';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server'
import { Webhook } from 'svix';

export async function POST(req) {
    await connectdb()
    try {
        const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
        console.log("SECRET", WEBHOOK_SECRET)

        if (!WEBHOOK_SECRET) {
            throw new Error("WEBHOOK SECRET not found in env")
        }

        const headerPayload = await headers()
        const svix_id = headerPayload.get('svix-id')
        const svix_timestamp = headerPayload.get('svix-timestamp')
        const svix_signature = headerPayload.get('svix-signature')

        if (!svix_id || !svix_timestamp || !svix_signature) {
            return NextResponse.json({
                success: false,
                message: "Svix headers missing"
            }, { status: 400 })
        }

        const payload = await req.json()
        const body = JSON.stringify(payload);

        const wh = new Webhook(WEBHOOK_SECRET)

        let evt;

        try {
            evt = wh.verify(body, {
                "svix-id": svix_id,
                "svix-timestamp": svix_timestamp,
                "svix-signature": svix_signature
            })

        } catch (error) {
            console.error("Error verifying webhook: ", error)
            return NextResponse.json({
                success: false,
                message: error instanceof Error ? error.message : "Error Occured"
            }, { status: 401 })
        }

        const eventType = evt.type

        if (eventType === 'user.created') {
            const { id, username, email_addresses, first_name, last_name, image_url } = evt.data;

            if (!id || !email_addresses) {
                console.log("EVENT ERROR", evt.data)
                return NextResponse.json({
                    success: false,
                    message: "Data is missing in event payload"
                }, { status: 400 })
            }

            const newUser = {
                _id: id,
                username: username || "",
                email: email_addresses[0]?.email_address || "shanky@gmail.com",
                name: `${first_name || ""} ${last_name || ""}` || "User",
                imageUrl: image_url
            }

            await User.create(newUser)

            return NextResponse.json({
                success: true,
                message: "User synced to DB"
            }, { status: 200 })
        }

    } catch (error) {
        console.log("Error in Clerk Webhook Event", error)
        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Internal Server Error"
        }, { status: 500 })
    }
}