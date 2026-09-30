import {connectToMongoDB} from "./config/database.js";
import mongoose from "mongoose";
async function run() {
    try{
        await connectToMongoDB();
        console.log("Connected to MongoDB Atlas!");

    }catch(err){
        console.error("Error:", err);
    }finally{
        await mongoose.connection.close();
    }
}

run();