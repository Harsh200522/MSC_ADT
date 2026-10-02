import { connectToMongoDB, disconnectFromMongoDB } from './config/database.js';
import { Employee } from './models/Employee.model.js';

async function run() {
    try {
        await connectToMongoDB();

        //Department Validation
        // const validDepartment=await Employee.insertOne(
        //     {
        //         employeeID:"E01",
        //         name:"John Doe",
        //         age:30,
        //         department:"CS",    
        //         salary:50000,
        //         city:"New York",
        //         experience:1
        //     }
        // )
        // console.log(validDepartment)


        //Insert Employee Data
        // const insEmployees=await Employee.insertMany([
        //     {
        //         employeeID:"E01",
        //         name:"Aarav",
        //         age:24,
        //         department:"IT",
        //         salary:35000,
        //         city:"Surat",
        //         experience:2
        //     },{
        //         employeeID:"E02",
        //         name:"Bhavna",
        //         age:29,
        //         department:"HR",
        //         salary:42000,
        //         city:"Ahmedabad",
        //         experience:5
        //     },{
        //         employeeID:"E03",
        //         name:"Chirag",
        //         age:26,
        //         department:"Sales",
        //         salary:30000,
        //         city:"Surat",
        //         experience:3
        //     },{
        //         employeeID:"E04",
        //         name:"Diya",
        //         age:32,
        //         department:"IT",
        //         salary:55000,
        //         city:"Vadodara",
        //         experience:8
        //     },{
        //         employeeID:"E05",
        //         name:"Farhan",
        //         age:22,
        //         department:"Sales",
        //         salary:25000,
        //         city:"Rajkot",
        //         experience:1
        //     }
        // ])
        // console.log(`${insEmployees.length} Employees Insert Successfully!!`)
        // console.log("Inserted Employee:\n",insEmployees);

        //count number of record store in collection
        // const countEmployees= await Employee.countDocuments()
        // console.log(`${countEmployees} employee is available`)

        //Display all Employees
        // const allEmployees=await Employee.find();
        // console.log("Employees:\n",allEmployees);

        // Find and display employee:
        // const findByID=await Employee.findOne({employeeID:"E03"});
        // console.log("Employee with ID E03:\n",findByID);

        // Display all employees whose department is IT
        // const findByDepartment=await Employee.find({department:"IT"});
        // console.log("Employees in IT Department:\n",findByDepartment);

        //Display all employees whose Salary greater than 40000
        // const findbySalary=await Employee.find({salary:{$gt:40000}});
        // console.log("Employees with Salary greater than 40000:\n",findbySalary);

        //Display all employees whose Experienceis greater than or equal 5
        // const findbyExpirnce=await Employee.find({experience:{$gte:5}})
        // console.log("Employees with Experince greater than or equal 5:\n ",findbyExpirnce);

        //Display all employees whose Salary less than 40000
        // const findbySalary=await Employee.find({salary:{$lt:40000}});
        // console.log("Employees with Salary less than 40000:\n",findbySalary);

        // Display employees whose age is at most 25
        // const findbyAge= await Employee.find({age:{$lte:25}});
        // console.log("Employees with age at most 25:\n",findbyAge);

        //Display employees whose city is not Surat
        // const findbyCity=await Employee.find({city:{$ne:"Surat"}});
        // console.log("Employees whose city is not Surat:\n",findbyCity);

        //Display employees who satisfy both conditions:
        // Department = IT
        // Salary > 40000
        // const findbyMultiCondition=await Employee.find({department:"IT",salary:{$gt:40000}});
        // console.log("Employees in IT Department with Salary greater than 40000:\n",findbyMultiCondition);
    

        //Display employees who satisfy either condition:
        // City = Surat
        // City = Rajkot
        // const findbyEitherCondition=await Employee.find({$or:[{city:"Surat"},{city:"Rajkot"}]});
        // console.log("Employees is Either in Rajkot or in Surat\n",findbyEitherCondition);

        //Display employees whose department is either:
        // IT
        // HR
        // const findbyInCondition=await Employee.find({department:{$in:["IT","HR"]}});
        // console.log("Employees in IT or HR Department:\n",findbyInCondition);

        //Display employees whose department is not:
        // Sales
        // HR
        // const findbyNinCondition=await Employee.find({department:{$nin:["Sales","HR"]}})
        // console.log("Employees in Sales or HR Department:\n",findbyNinCondition)

        // Display employees whose salary is between:30000 and 50000
        // const findbySalaryRange=await Employee.find({salary:{$gte:30000,$lte:50000}});
        // console.log("Employees with Salary between 30000 and 50000:\n",findbySalaryRange);

        // Display employees who:
        // Are at least 25 years old
        // Have at least 3 years of experience
        // Have salary greater than 30000
        // const findbyMultipleConditions=await Employee.find({age:{$gte:25},experience:{$gte:3},salary:{$gt:30000}});
        // console.log("Employees who are at least 25 years old, have at least 3 years of experience, and have a salary greater than 30000:\n",findbyMultipleConditions);

        //Display all Employees
        // const allEmployees=await Employee.find().sort({department:1,salary:-1});
        // console.log("Employees:\n",allEmployees);

        // Display only required fields of employees
        // const findbyRequiredFields=await Employee.find({},{_id:0,name:1,salary:1});
        // console.log("Employees with Required Fields:\n",findbyRequiredFields);

        //Display 3 highest paid employee 
        // const highestPaidEmployees=await Employee.find().sort({salary:-1}).limit(3);
        // console.log("Highest Paid Employees:\n",highestPaidEmployees);

        //Display 2 youngest employee
        // const findYoungestEmployees=await Employee.find().sort({age:1}).limit(2);
        // console.log("Youngest Employees:\n",findYoungestEmployees); 

        //count number of employees in IT department
        // const countEmployeesInIT=await Employee.countDocuments({salary:{$gte:40000}});
        // console.log(`Number of Employees in IT Department: ${countEmployeesInIT}`);

        // const updateEmployee=await Employee.updateOne({employeeID:"E01"},{$set:{salary:38000}});
        // console.log("Updated Employee:\n",updateEmployee);

        // const updateEmployee=await Employee.updateMany({department:"IT"},{$inc:{salary:5000}});
        // console.log("Updated Employee:\n",updateEmployee);

        // const updateEmployee=await Employee.updateMany({employeeID:"E05"},{$inc:{experience:1}});
        // console.log("Updated Employee:\n",updateEmployee);

        // const updateEmployee=await Employee.updateMany({department:"Sales"},{$set:{isActive:false}});
        // console.log("Updated Employee:\n",updateEmployee);

        //Increase the salary by 3000 for employees who satisfy:
        // Department = IT
        // Experience >= 5
        // const updateEmployee=await Employee.updateMany({department:"IT",experience:{$gte:5}},{$inc:{salary:3000}});
        // console.log("Updated Employee:\n",updateEmployee);

        // const deleteEmployee=await Employee.deleteOne({employeeID:"E05"});
        // console.log("Deleted Employee:\n",deleteEmployee);

        // const findEmployee=await Employee.findOne({employeeID:"E05"});
        // if(findEmployee === null){
        //     console.log("Employee not found");
        // }

        const deleteEmployee=await Employee.deleteMany({isActive:false});
        console.log("Deleted Employees:\n",deleteEmployee);

    } catch (error) {
        if(error.name === 'ValidationError') {
            console.error('Validation Error:', error.message);  
        }else{
            console.log("Error:",error)
        }
    } finally {
        await disconnectFromMongoDB();
    }
}
run()