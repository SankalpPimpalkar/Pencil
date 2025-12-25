import { NextResponse } from "next/server";
import File from "@/app/models/file.model";

export async function GET(req, { params }) {
    try {
        const { fileId } = await params;

        if (!fileId) {
            return NextResponse.json({
                success: false,
                message: "FileId Not Provided"
            }, { status: 400 })
        }

        const file = await File.findById(fileId).populate("user", "name imageUrl")

        if (!file) {
            return NextResponse.json({
                success: false,
                message: "File Not Found"
            }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            message: "File Fetched",
            file
        })

    } catch (error) {
        console.log("Error while Fetching File", error)
        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Internal Server Error"
        }, { status: 500 })
    }
}

export async function DELETE(req, { params }) {
    try {
        const { fileId } = await params;
        const userId = req.headers["x-clerk-user-id"]

        if (!fileId) {
            return NextResponse.json({
                success: false,
                message: "FileId Not Provided"
            }, { status: 400 })
        }

        const file = await File.findById(fileId)

        if (!file) {
            return NextResponse.json({
                success: false,
                message: "File Not Found"
            }, { status: 404 })
        }

        if (file.user.toString() !== userId.toString()) {
            return NextResponse.json({
                success: false,
                message: "You are not permitted to delete this file"
            }, { status: 401 })
        }

        await File.findByIdAndDelete(fileId)

        return NextResponse.json({
            success: true,
            message: "File Deleted"
        })

    } catch (error) {
        console.log("Error while Deleting File", error)
        return NextResponse.json({
            success: false,
            message: error instanceof Error ? error.message : "Internal Server Error"
        }, { status: 500 })
    }
}