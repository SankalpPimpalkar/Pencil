import connectdb from "@/app/lib/connectdb";
import File from "@/app/models/file.model";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(req) {
    await connectdb()
    try {
        const formData = await req.formData();
        const file = formData.get("file");
        const userId = req.headers["x-clerk-user-id"] || "test"

        if (!userId) {
            return NextResponse.json({
                success: false,
                message: "Unauthenticated"
            }, { status: 401 })
        }

        if (!file) {
            return NextResponse.json({
                success: false,
                message: "No File Uploaded"
            }, { status: 400 })
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: "pencil" },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(buffer);
        })

        const savedFile = await File.create({
            publicId: uploadResult.publicId,
            type: uploadResult.type,
            format: uploadResult.format,
            size: uploadResult.size,
            url: uploadResult.secure_url,
            user: userId
        })

        return NextResponse.json({
            success: true,
            message: "File Uploaded",
            file: savedFile
        })

    } catch (error) {
        console.log("Error while Uploading File", error)
        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Internal Server Error"
        }, { status: 500 })
    }
}