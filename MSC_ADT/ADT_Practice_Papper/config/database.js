import dns from "dns";
import "dotenv/config";
import mongoose from "mongoose";  

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error("MONGODB_URI is not defined in .env");
}

export async function connectToMongoDB() {
    await mongoose.connect(uri,{ dbName: "practice_students" });
    return mongoose.connection;
}
