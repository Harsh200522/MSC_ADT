const client = require('./database');

async function run() {
  let connected = false;

  try {
    // =========================================
    // 1. Connect to MongoDB Atlas
    // =========================================

    await client.connect();
    connected = true;

    console.log("Connected to MongoDB Atlas!");

    // =========================================
    // 2. Select Database
    // =========================================

    const db = client.db("campus_enrollment");

    // =========================================
    // 3. Select Collections
    // =========================================

    const courses = db.collection("courses");
    const students = db.collection("students");

    // =========================================
    // 4. Delete Existing Data
    // =========================================

    await courses.deleteMany({});
    await students.deleteMany({});

    console.log("Old data deleted.");

    // =========================================
    // 5. Insert Courses
    // =========================================

    const courseResult = await courses.insertMany([
      {
        code: "CS101",
        title: "Introduction to Computer Science",
        credits: 4
      },
      {
        code: "DB201",
        title: "Database Management Systems",
        credits: 3
      },
      {
        code: "WEB301",
        title: "Web Development",
        credits: 3
      },
      {
        code: "DS205",
        title: "Data Structures",
        credits: 4
      }
    ]);

    console.log("Courses inserted successfully!");

    // =========================================
    // 6. Store Course IDs
    // =========================================

    const courseIds = courseResult.insertedIds;

    console.log("Course IDs:");
    console.log(courseIds);

    // =========================================
    // 7. Insert Students
    // =========================================

    await students.insertMany([
      {
        studentId: "STU001",
        name: "Aarav Patel",
        email: "aarav.patel@example.com",

        profile: {
          age: 20,
          phone: "+91-9876543210",
          city: "Surat",

          address: {
            street: "Ring Road",
            state: "Gujarat"
          }
        },

        enrollments: [
          {
            courseId: courseIds[0],
            semester: "Semester 1",
            marks: 86
          },
          {
            courseId: courseIds[1],
            semester: "Semester 2",
            marks: 91
          }
        ]
      },

      {
        studentId: "STU002",
        name: "Diya Shah",
        email: "diya.shah@example.com",

        profile: {
          age: 21,
          city: "Ahmedabad",
          scholarship: true
        },

        enrollments: [
          {
            courseId: courseIds[0],
            semester: "Semester 1",
            marks: 78
          },
          {
            courseId: courseIds[2],
            semester: "Semester 2",
            marks: null
          }
        ]
      },

      {
        studentId: "STU003",
        name: "Rohan Mehta",
        email: "rohan.mehta@example.com",

        profile: {
          age: 19,
          phone: "+91-9123456780",
          city: "Vadodara"
        },

        enrollments: [
          {
            courseId: courseIds[3],
            semester: "Semester 1",
            marks: 88
          },
          {
            courseId: courseIds[2],
            semester: "Semester 2",
            marks: 94
          }
        ]
      },

      {
        studentId: "STU004",
        name: "Isha Desai",
        email: "isha.desai@example.com",

        profile: {
          age: 22,
          city: "Mumbai",

          emergencyContact: {
            name: "Neha Desai",
            relation: "Mother"
          }
        },

        enrollments: [
          {
            courseId: courseIds[1],
            semester: "Semester 1",
            marks: null
          },
          {
            courseId: courseIds[3],
            semester: "Semester 2",
            marks: 82
          }
        ]
      }
    ]);

    console.log("Students inserted successfully!");

    // =========================================
    // 8. Count Documents
    // =========================================

    const courseCount = await courses.countDocuments();
    const studentCount = await students.countDocuments();

    console.log("\nNumber of courses:");
    console.log(courseCount);

    console.log("\nNumber of students:");
    console.log(studentCount);

    // =========================================
    // 9. Final Message
    // =========================================

    console.log("\nSetup completed successfully!");

  } catch (error) {
    console.error("\nMongoDB Error:");
    console.error(error.message);

    if (error.cause) {
      console.error("\nCause:");
      console.error(error.cause.message);
    }

    console.error("\nPlease check:");
    console.error("1. MongoDB Atlas Network Access / IP whitelist");
    console.error("2. Your internet connection");
    console.error("3. Your .env MONGODB_URI");
    console.error("4. VPN or firewall settings");

  } finally {
    // =========================================
    // 10. Close Connection
    // =========================================

    if (connected) {
      await client.close();
      console.log("\nMongoDB connection closed.");
    }
  }
}

run();
