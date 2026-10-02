import mongoose from 'mongoose';
import dns from 'dns';
dns.setServers(["8.8.8.8","8.8.4.4"]);
export async function connectToMongoDB() {
  try {
    await mongoose.connect("mongodb+srv://harshgilitwala22_db_user:db6vLn6ZJhCk5XGR@cluster0.gzeapmu.mongodb.net/?appName=Cluster0",{dbName: "practice_employees_5"});
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.dir(err);
  }
}


export async function disconnectFromMongoDB() {
  await mongoose.connection.close();
}

