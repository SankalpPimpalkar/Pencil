import { serve } from "inngest/next";
import { inngest } from "@/app/lib/inngest";
import connectdb from "@/app/lib/connectdb";
import User from "@/app/models/user.model";

const syncUser = inngest.createFunction(
    { id: "sync-user" },
    { event: "clerk/user.created" },
    async ({ event }) => {
        await connectdb()
        const { id, email_addresses, first_name, last_name, image_url } = event.data;
        console.log("USER CREATED EVENT: ", event.data)

        const newUser = {
            _id: id,
            email: email_addresses[0]?.email_address,
            name: `${first_name || ""} ${last_name || ""}` || "User",
            imageUrl: image_url
        }

        await User.create(newUser)
    }
)

const deleteUser = inngest.createFunction(
    { id: "delete-user-from-db" },
    { event: "clerk/user.deleted" },
    async ({ event }) => {
        await connectdb()
        const { id } = event.data
        await User.findByIdAndDelete(id);
    }
)

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [syncUser, deleteUser]
});