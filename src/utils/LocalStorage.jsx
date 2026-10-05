const employees = [
  {
    id: 1,
    firstName: "Hammad",
    email: "employee1@gmail.com",
    password: "123456",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completedTask: 1,
      failedTask: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Build Login Page",
        taskDescription:
          "Create a responsive login page with username and password fields.",
        taskDate: "2026-10-01",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription:
          "Fix the responsive navigation menu on mobile devices.",
        taskDate: "2026-10-02",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Design Dashboard",
        taskDescription:
          "Create the initial UI design for the employee dashboard.",
        taskDate: "2026-09-28",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: true,
        taskTitle: "Update User Profile",
        taskDescription:
          "Add profile editing functionality for users.",
        taskDate: "2026-09-27",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Create Button Components",
        taskDescription:
          "Design reusable button components for the application.",
        taskDate: "2026-10-03",
        category: "Design"
      }
    ]
  },

  {
    id: 2,
    firstName: "Ayesha",
    email: "employee2@gmail.com",
    password: "123456",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completedTask: 2,
      failedTask: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Create API Routes",
        taskDescription:
          "Create REST API routes for employee management.",
        taskDate: "2026-10-01",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
        taskTitle: "Database Connection",
        taskDescription:
          "Connect the application to the MongoDB database.",
        taskDate: "2026-10-02",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Landing Page Design",
        taskDescription:
          "Design the layout and visual structure of the landing page.",
        taskDate: "2026-09-25",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Create Logo",
        taskDescription:
          "Create a simple logo for the application.",
        taskDate: "2026-09-24",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Add Authentication",
        taskDescription:
          "Implement authentication for employees and admins.",
        taskDate: "2026-10-04",
        category: "Development"
      }
    ]
  },

  {
    id: 3,
    firstName: "Bilal",
    email: "employee3@gmail.com",
    password: "123456",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completedTask: 1,
      failedTask: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Create Product Cards",
        taskDescription:
          "Build reusable product card components using React.",
        taskDate: "2026-10-01",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
        taskTitle: "Design Product Page",
        taskDescription:
          "Create a clean and responsive product page design.",
        taskDate: "2026-10-03",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Setup React Project",
        taskDescription:
          "Initialize the React project and configure the required dependencies.",
        taskDate: "2026-09-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: true,
        taskTitle: "Create Mobile Layout",
        taskDescription:
          "Make the existing page responsive for mobile devices.",
        taskDate: "2026-09-26",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Implement Search",
        taskDescription:
          "Add search functionality to filter products by name.",
        taskDate: "2026-10-05",
        category: "Development"
      }
    ]
  },

  {
    id: 4,
    firstName: "Sana",
    email: "employee4@gmail.com",
    password: "123456",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completedTask: 2,
      failedTask: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Create Dashboard",
        taskDescription:
          "Build the main dashboard interface for employees.",
        taskDate: "2026-10-01",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
        taskTitle: "Dashboard UI Design",
        taskDescription:
          "Create the visual design for the dashboard sections.",
        taskDate: "2026-10-02",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Create Sidebar",
        taskDescription:
          "Build a responsive sidebar navigation component.",
        taskDate: "2026-09-23",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Choose Color Palette",
        taskDescription:
          "Select a consistent color palette for the application.",
        taskDate: "2026-09-21",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Add Notifications",
        taskDescription:
          "Implement notifications for new employee tasks.",
        taskDate: "2026-10-06",
        category: "Development"
      }
    ]
  },

  {
    id: 5,
    firstName: "Usman",
    email: "employee5@gmail.com",
    password: "123456",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completedTask: 1,
      failedTask: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Build Task Manager",
        taskDescription:
          "Create a task management interface using React.",
        taskDate: "2026-10-01",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
        taskTitle: "Design Task Cards",
        taskDescription:
          "Design task cards showing title, category and status.",
        taskDate: "2026-10-02",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Create Task Form",
        taskDescription:
          "Build a form for creating and submitting new tasks.",
        taskDate: "2026-09-24",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: true,
        taskTitle: "Improve UI Spacing",
        taskDescription:
          "Fix inconsistent spacing between sections of the application.",
        taskDate: "2026-09-26",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Add Task Filters",
        taskDescription:
          "Allow users to filter tasks by category and status.",
        taskDate: "2026-10-05",
        category: "Development"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    firstName: "Ahmed",
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  if (localStorage.getItem("employees") === null) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (localStorage.getItem("admin") === null) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};

export const addEmployeeToLocalStorage = (employee) => {
  const storedEmployees = getLocalStorage().employees;
  const employees = Array.isArray(storedEmployees) ? storedEmployees : [];
  const normalizedEmail = employee.email.trim().toLowerCase();

  if (
    normalizedEmail === "admin@gmail.com" ||
    employees.some((item) => item.email?.toLowerCase() === normalizedEmail)
  ) {
    throw new Error("An account with this email already exists.");
  }

  const newEmployee = {
    ...employee,
    id:
      employees.reduce(
        (highestId, item) => Math.max(highestId, Number(item.id) || 0),
        0
      ) + 1,
    email: normalizedEmail,
  };
  const updatedEmployees = [...employees, newEmployee];

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  return updatedEmployees;
};
