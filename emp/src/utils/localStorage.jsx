

const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@d.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile the monthly sales report for review",
        taskDate: "2025-09-20",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team sync-up meeting",
        taskDate: "2025-09-22",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Client Follow-up",
        taskDescription: "Call and follow up with Client ABC about project status",
        taskDate: "2025-09-23",
        category: "Client",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Update Website Content",
        taskDescription: "Revise homepage and services page text",
        taskDate: "2025-09-21",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Bug Fixes",
        taskDescription: "Resolve reported issues in the ticketing system",
        taskDate: "2025-09-24",
        category: "Bug",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Write Documentation",
        taskDescription: "Complete API documentation draft",
        taskDate: "2025-09-25",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review teammate's pull request",
        taskDate: "2025-09-26",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    firstName: "Rohit",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Prepare Budget Plan",
        taskDescription: "Draft the Q4 budget plan",
        taskDate: "2025-09-20",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Vendor Payment",
        taskDescription: "Release payment to vendor XYZ",
        taskDate: "2025-09-22",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Training Session",
        taskDescription: "Attend security awareness training",
        taskDate: "2025-09-27",
        category: "Training",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Inventory Check",
        taskDescription: "Audit inventory for missing items",
        taskDate: "2025-09-21",
        category: "Logistics",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Maintenance Request",
        taskDescription: "Log system maintenance request",
        taskDate: "2025-09-23",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Project Planning",
        taskDescription: "Outline steps for new CRM implementation",
        taskDate: "2025-09-28",
        category: "Projects",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Ananya",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Social Media Post",
        taskDescription: "Design and schedule Instagram campaign",
        taskDate: "2025-09-20",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Email Newsletter",
        taskDescription: "Draft and send September newsletter",
        taskDate: "2025-09-22",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Market Research",
        taskDescription: "Collect competitor analysis data",
        taskDate: "2025-09-24",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Campaign Report",
        taskDescription: "Analyze performance of last campaign",
        taskDate: "2025-09-26",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees') || '[]');
    const admin = JSON.parse(localStorage.getItem('admin') || '[]');
    return { employees, admin };
}