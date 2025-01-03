export interface Admin {
  id: number;
  email: string;
  password: string;
  firstName: string;  // Added firstName property
}

export interface Task {
  active: boolean;
  newTask: boolean;
  completed: boolean;
  failed: boolean;
  taskTitle: string;
  taskDescription: string;
  taskDate: string;
  category: string;
}

export interface Employee {
  id: number;
  email: string;
  password: string;
  firstName: string;  // Added firstName property
  tasks: Task[];
  taskCount: {
      active: number;
      newTask: number;
      completed: number;
      failed: number;
  }; // New property to count task statuses
}

const employees: Employee[] = [
{
  id: 1,
  email: "employee1@example.com",
  password: "123",
  firstName: "Prem",  // Nepali name
  tasks: [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "Implement User Login",
      taskDescription: "Create a user login feature with validation.",
      taskDate: "2024-12-10",
      category: "Development"
    },
    {
      active: true,
      newTask: false,
      completed: true,
      failed: false,
      taskTitle: "Bug Fixing",
      taskDescription: "Fix the issue where users cannot log in.",
      taskDate: "2024-12-08",
      category: "Development"
    },
    {
      active: false,
      newTask: true,
      completed: false,
      failed: true,
      taskTitle: "Test Payment Gateway",
      taskDescription: "Test the new payment gateway integration.",
      taskDate: "2024-12-12",
      category: "Testing"
    }
  ],
  taskCount: {
    active: 2,
    newTask: 2,
    completed: 1,
    failed: 1
  }
},
{
  id: 2,
  email: "employee2@example.com",
  password: "123",
  firstName: "Sita",  // Nepali name
  tasks: [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "UI Design for Dashboard",
      taskDescription: "Design the UI for the user dashboard page.",
      taskDate: "2024-12-11",
      category: "Design"
    },
    {
      active: true,
      newTask: false,
      completed: true,
      failed: false,
      taskTitle: "API Documentation",
      taskDescription: "Write documentation for the new API endpoints.",
      taskDate: "2024-12-05",
      category: "Documentation"
    }
  ],
  taskCount: {
    active: 1,
    newTask: 1,
    completed: 1,
    failed: 0
  }
},
{
  id: 3,
  email: "employee3@example.com",
  password: "123",
  firstName: "Hari",  // Nepali name
  tasks: [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "Database Schema Design",
      taskDescription: "Design the database schema for the application.",
      taskDate: "2024-12-09",
      category: "Development"
    },
    {
      active: true,
      newTask: false,
      completed: true,
      failed: false,
      taskTitle: "Deploy App to Production",
      taskDescription: "Deploy the application to the production environment.",
      taskDate: "2024-12-04",
      category: "Deployment"
    }
  ],
  taskCount: {
    active: 1,
    newTask: 1,
    completed: 1,
    failed: 0
  }
},
{
  id: 4,
  email: "employee4@example.com",
  password: "123",
  firstName: "Gita",  // Nepali name
  tasks: [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "Create Test Cases for Login Feature",
      taskDescription: "Write test cases to validate the login feature.",
      taskDate: "2024-12-12",
      category: "Testing"
    },
    {
      active: false,
      newTask: false,
      completed: false,
      failed: true,
      taskTitle: "Performance Testing",
      taskDescription: "Conduct performance testing on the app.",
      taskDate: "2024-12-03",
      category: "Testing"
    }
  ],
  taskCount: {
    active: 1,
    newTask: 1,
    completed: 0,
    failed: 1
  }
},
{
  id: 5,
  email: "employee5@example.com",
  password: "123",
  firstName: "Laxmi",  // Nepali name
  tasks: [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "Security Audit",
      taskDescription: "Conduct a security audit on the app.",
      taskDate: "2024-12-10",
      category: "Security"
    },
    {
      active: false,
      newTask: false,
      completed: true,
      failed: false,
      taskTitle: "Code Review",
      taskDescription: "Review code submitted by team members.",
      taskDate: "2024-12-06",
      category: "Development"
    }
  ],
  taskCount: {
    active: 1,
    newTask: 1,
    completed: 1,
    failed: 0
  }
}
];

const admin: Admin[] = [
{
  id: 100,
  email: "admin@example.com",
  password: "123",
  firstName: "Ramesh"  // Nepali name
}
];


  export const setLocalStorage=():void=>{
    localStorage.setItem('employee',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage=():{employee:Employee[],admin:Admin[]}=>{
    const Emp=localStorage.getItem('employee');
    let empData:Employee[]=[];
    let adminData:Admin[]=[];
    if(Emp){
        try{
           empData= JSON.parse(Emp);
          
        }catch(err){
            console.log(err);
        }
    }
    const admin=localStorage.getItem('admin')
    if(admin){
        adminData=JSON.parse(admin);
    }
    return {employee:empData,admin:adminData}


  }

  