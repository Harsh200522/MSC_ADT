const sequelize = require('./config/database');
const { Department, Employee ,Project, EmployeeProject} = require('./models');

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Connection established.');

    await sequelize.sync();
    // Reads every model Sequelize knows about and creates any missing
    // table to match. This is the "no migrations" shortcut for this lab —
    // see the callout below for when that stops being a good idea.
    

    // const department = await Department.create({
    //     name:'EV',
    //     location:'Vesu',
    // });
    // console.log('Department created:', department);
    // const employee = {
    //   name:'Harsh',
    //   email: 'Harsh22@gmail.com',
    //   salary: 500000,
    //   departmentId:department.id
    // };
      // const project= await Project.create({ name:"Project A", deadline:"2024-12-31"});
   // await Employee.create(employee);
      //  const emp = await Employee.findOne({ where: { id: 2 } });
      //   const proj = await Project.findOne({ where: { name: 'Project A' } });
      //   await emp.addProject(proj, { through: { role: 'Consultant', hoursAllocated: 5 } });
      // console.log("Project Created !!!");
    //const employees = await Employee.findAll({ include: Department });
    //console.log(employees.map((b) => b.toJSON()));


        // const projects = await Project.findAll({
        //     include: {
        //         model: Employee,
        //         through: { attributes: ['role', 'hoursAllocated'] },
        //     },
        // });

        // projects.forEach((project) => {
        //     console.log(`Project: ${project.name}`);

        //     project.Employees.forEach((employee) => {
        //         console.log(
        //             `  - Employee: ${employee.name} | Role: ${employee.EmployeeProject.role} | Hours Allocated: ${employee.EmployeeProject.hoursAllocated}`
        //         );
        //     });
        // });

         const employees = await Employee.findAll({
            include: {
                model: Project,
                through: { attributes: ['role', 'hoursAllocated'] },
            },
        });

        employees.forEach((employee) => {
            console.log(`Employee: ${employee.name}`);
            employee.Projects.forEach((project) => {
                console.log(
                    `  - Project: ${project.name}`
                );
            });
        });
  } catch (err) {
    console.error('Unable to connect or query:', err);
  } finally {
    await sequelize.close();
  }
}

main();