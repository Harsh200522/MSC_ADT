import {connectToMongoDB, disconnectFromMongoDB} from './config/database.js';
import { Employee } from './models/Employee.model.js';
async function run(){
    try {
        await connectToMongoDB();
        //apply all the validation rules and constraints defined in the Employee model

        // const ValidInsert = await Employee.create({
        //     employeeId: "E01",
        //     name: "Asha",
        //     age: 17,
        //     department: "CS",
        //     salary: 19000,
        //     city: "Surat",
        //     skills:[
        //         {
        //             skillName: "JavaScript",
        //             level: "Big",
        //             experience: -1
        //         }
        //     ]
        // });
        // console.log('Valid insert:', ValidInsert);


        //insert all employee records in bulk using insertMany() method
        // const insertedEmployees = await Employee.insertMany([
        //     {
        //         employeeId:"E01",
        //         name:"Asha",
        //         age:22,
        //         department:"IT",
        //         salary:45000,
        //         city:"Surat",
        //         skills:[
        //             {
        //                 skillName:"Java",
        //                 level: "Advanced",
        //                 experience: 3
        //             },
        //             {
        //                 skillName:"MongoDB",
        //                 level: "Intermediate",
        //                 experience: 2
        //             },
        //             {
        //                 skillName:"Python",
        //                 level: "Beginner",
        //                 experience: 1
        //             }
        //         ]
        //     },
        //     {
        //     employeeId:"E02",
        //     name:"Ravi",
        //     age:25,
        //     department:"IT",
        //     salary:60000,
        //     city:"Ahmedabad",
        //     skills:[
        //         {
        //             skillName:"Java",
        //             level: "Advanced",
        //             experience: 4
        //         },
        //         {
        //             skillName:"MongoDB",
        //             level: "Advanced",
        //             experience: 3
        //         },
        //         {
        //             skillName:"React",
        //             level: "Intermediate",
        //             experience: 2
        //         }
        //     ]
        // },
        // {
        //         employeeId:"E03",
        //         name:"Neha",
        //         age:24,
        //         department:"HR",
        //         salary:38000,
        //         city:"Surat",
        //         skills:[
        //             {
        //                 skillName:"Excel",
        //                 level: "Advanced",
        //                 experience: 4
        //             },
        //             {
        //                 skillName:"Communication",
        //                 level: "Advanced",
        //                 experience: 3
        //             },
        //             {
        //                 skillName:"Python",
        //                 level: "Beginner",
        //                 experience: 1
        //             }
        //         ]
        //     },
        //     {
        //         employeeId:"E04",
        //         name:"Imran",
        //         age:24,
        //         department:"Finance",
        //         salary:75000,
        //         city:"Vadodara",
        //         skills:[
        //             {
        //                 skillName:"Excel",
        //                 level: "Advanced",
        //                 experience: 5
        //             },
        //             {
        //                 skillName:"Accounting",
        //                 level: "Advanced",
        //                 experience: 4
        //             },
        //             {
        //                 skillName:"MongoDB",
        //                 level: "Beginner",
        //                 experience: 1
        //             }
        //         ]
        //     },
        //     {
        //         employeeId:"E05",
        //         name:"Kavya",
        //         age:27,
        //         department:"IT",
        //         salary:52000,
        //         city:"Rajkot",
        //         skills:[
        //             {
        //                 skillName:"JavaScript",
        //                 level: "Intermediate",
        //                 experience: 2
        //             },
        //             {
        //                 skillName:"React",
        //                 level: "Advanced",
        //                 experience: 3
        //             },
        //             {
        //                 skillName:"MongoDB",
        //                 level: "Intermediate",
        //                 experience: 2
        //             }
        //         ]
        //     }
            
        // ])
        // console.log(`Inserted ${insertedEmployees.length} employees successfully!`);
        // console.log('Inserted Employees:\n', insertedEmployees);



        //Display all Employees
        const displayAll=await Employee.find().lean();
        console.log(JSON.stringify(displayAll, null, 2));
    } catch (error) {
        if(error.name === 'ValidationError'){
            console.error('Validation error:', error.message);
        }else{
            console.error('Error:', error);
        }
    }finally{
        await disconnectFromMongoDB();
    }
}
run()