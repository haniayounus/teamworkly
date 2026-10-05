# TeamWorkly (Employee Management System )

A role-based task management app built with React, Vite and Tailwind CSS. Admins create employees and assign tasks; employees log in to view their tasks and update each task's status. All data is stored in the browser's `localStorage`, so there is no backend or database to set up.

## Features

**Admin**
- Log in to a dedicated Admin Panel
- Create and assign tasks to any employee (title, description, date, category)
- Add new employees (name, email, password), with duplicate-email checks
- View all employees' tasks and task counts in one place

**Employee**
- Log in with the credentials the admin created
- See summary counts: new, active, completed and failed tasks
- Browse a task list and move each task between new, active, completed and failed
- Session is remembered across page reloads

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- ESLint (with React Hooks and React Refresh plugins)

## Demo Credentials

On first load, the app seeds `localStorage` with sample data.

| Role     | Email                | Password |
| -------- | -------------------- | -------- |
| Admin    | `admin@gmail.com`    | `123`    |
| Employee | `employee1@gmail.com`| `123456` |

The seed data includes six sample employees; their emails follow the same pattern (`employee1@gmail.com`, `employee2@gmail.com`, ...), all with the password `123456`.

## Project Structure

```
EmploySystem/
├── public/                      # Static assets (favicon, icons)
├── src/
│   ├── main.jsx                 # App entry; wraps App in AuthContext
│   ├── App.jsx                  # Login logic, session restore, role routing
│   ├── index.css                # Tailwind entry
│   ├── Context/
│   │   └── AuthContext.jsx      # Shared employee data via React Context
│   ├── utils/
│   │   └── LocalStorage.jsx     # Seed data + localStorage helpers
│   └── Components/
│       ├── Auth/                # Login form
│       ├── DashBoard/           # AdminDashboard, EmployeeDashboard
│       ├── AdminDashboardComponents/   # CreateTask, AddEmployee, AllTasks
│       ├── EmployeeDashboardComponents/ # Header, GivenTasks (task counts)
│       └── TaskList/            # Tasklist and New/Accept/Complete/Failed task cards
├── index.html
├── vite.config.js
└── package.json
```

## How It Works

1. On startup, `AuthContext` calls `setLocalStorage()`, which writes the sample employees and admin to `localStorage` if they aren't there yet.
2. `App` checks `localStorage` for a saved `LogInUser` session and restores it, otherwise shows the login screen.
3. On login, the user is routed to the Admin or Employee dashboard based on their role.
4. Changes (new employees, new tasks, status updates) are written back to `localStorage` and pushed into React Context so the UI updates immediately.
