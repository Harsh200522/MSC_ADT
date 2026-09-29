import { connectToMongoDB } from "./config/database.js";
import mongoose from "mongoose";
import Student from "./models/Student.model.js";

async function run() {
    try {
        await connectToMongoDB();
        console.log("Connected to MongoDB Atlas!");

        // const s = new Student({
        //     studentId: "S01",
        //     name: "Asha",
        //     age: 21,
        //     course: "MSc.IT",
        //     marks: 82,
        //     city: "Surat"
        // });
        // await s.save();
        // console.log("Record inserted successfully:", s);

        // const students =await Student.insertMany([
        //     {
        //         studentId: "S02",
        //         name: "Ravi",
        //         age: 23,
        //         course: "MSc.IT",
        //         marks: 58,
        //         city: "Ahmedabad"
        //     },
        //     {
        //         studentId: "S03",
        //         name: "Neha",
        //         age: 20,
        //         course: "BCA",
        //         marks: 91,
        //         city: "Surat"
        //     },
        //     {
        //         studentId: "S04",
        //         name: "Imran",
        //         age: 22,
        //         course: "MSc.IT",
        //         marks: 70,
        //         city: "Vadodra"
        //     },
        //     {
        //         studentId: "S05",
        //         name: "Kavya",
        //         age: 24,
        //         course: "BCA",
        //         marks: 45,
        //         city: "Rajkot"
        //     }
        // ]);
        // console.log(`${students.length} records inserted successfully.`);
        // console.log(students);


        // Display all students.
        // const allStudents = await Student.find();
        // console.log("All students:");
        // console.log(allStudents);

        //Display students whose city is Surat.
        // const findCityWiseStudents= await Student.find({ city: "Surat" });
        // console.log("Students from Surat:");
        // console.log(findCityWiseStudents);


        //  Display students with marks at least 70, sorted by marks from highest to lowest.
        // const findMark = await Student.find({marks:{$gte:70}}).sort({marks:-1});
        // console.log("Greater Than 70 Marks:");
        // console.log(findMark);

        // Change S02 marks to 65. Display the updated student. 
        // const updateStu= await Student.updateOne({studentId:"S02"},{$set:{marks:65}});
        // console.log("Updated Student:",updateStu);
        // const updatedStudent= await Student.find({studentId:"S02"});
        // console.log(updatedStudent);


        //Set isActive to false for every BCA student. Display the affected students. 
        //  const updateIsActive=await Student.updateMany({course:"BCA"},{$set:{isActive:false}}) ;
        //  console.log("Affected Students:",updateIsActive);

        // Delete S05 using studentId and verify that the record no longer exists.
        const deleteStu= await Student.deleteOne({studentId:"S05"});
        console.log("Deleted Student:",deleteStu);
        const verifyDelete= await Student.find({studentId:"S05"});
        console.log("Verify Deleted Student:",verifyDelete);  
    } catch (error) {
        if (error.name === "ValidationError") {
            console.log("Validation error:", error.message);
        } else {
            console.error("Error:", error);
            process.exitCode = 1;
        }
    } finally {
        await mongoose.connection.close();
    }
}

run();