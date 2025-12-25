import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectdb() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGO_URI, { dbName: "pencil" });
    }

    cached.conn = await cached.promise;
    console.log("☘️ Mongodb Connected");
    return cached.conn;
}