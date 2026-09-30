import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const uri="mongodb+srv://harshgilitwala22_db_user:Hq67F1MW4o1lbnNT@cluster0.gzeapmu.mongodb.net/?appName=Cluster0";
export async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, {dbName: "practice_ecommerce_5"});
    return mongoose.connection;
  } catch (err) {
    console.dir(err);
  }
}