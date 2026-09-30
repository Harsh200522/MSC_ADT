import mongoose from 'mongoose';
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); 
const uri = "mongodb+srv://harshgilitwala22_db_user:D1mOTzvj4yOeEdW0@cluster0.gzeapmu.mongodb.net/?appName=Cluster0";
export async function connectToMongoDB() {
  try {
    await mongoose.connect(uri,{dbName: "practice_products_5"});
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.dir(err);
  }
}
// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await mongoose.connection.close();
}
