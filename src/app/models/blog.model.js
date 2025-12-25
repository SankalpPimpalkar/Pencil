import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    content_type: {
        type: String,
        enum: ["heading", "paragraph", "image"],
        required: true,
    },
    content: {
        type: String,
        trim: true,
    },
    fileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File"
    }
})

const blogTagSchema = new mongoose.Schema({
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
    }
})

const likesSchema = new mongoose.Schema({
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true
    },
    content: [contentSchema],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)
export const BlogTag = mongoose.models.BlogTag || mongoose.model("BlogTag", blogTagSchema)
export const Like = mongoose.models.Like || mongoose.model("Like", likesSchema)