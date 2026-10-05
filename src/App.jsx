import { useContext, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/DashBoard/EmployeeDashboard'
import AdminDashboard from './Components/DashBoard/AdminDashboard'
import { Context } from './Context/AuthContext'
const App = () => {

const [initialSession] = useState(() => {
  const savedSession = localStorage.getItem("LogInUser")
  return savedSession ? JSON.parse(savedSession) : null
})
const [ user , setUser ] = useState(initialSession?.role ?? null)
const [ userLogInData , setUserLogInData ] = useState(initialSession?.data ?? null)
const [userData, setUserData] = useContext(Context)


function handleLogin(email, password) {
  const normalizedEmail = email.trim().toLowerCase()
  if (normalizedEmail === "admin@gmail.com" && password === "123") {
    setUser("admin")
    setUserLogInData(null)
    localStorage.setItem("LogInUser", JSON.stringify({ role: "admin" }))
    return true
  }

  const employee = Array.isArray(userData)
    ? userData.find(
        (item) =>
          item.email?.toLowerCase() === normalizedEmail &&
          item.password === password
      )
    : undefined

  if (!employee) return false

  setUser("employees")
  setUserLogInData(employee)
  localStorage.setItem(
    "LogInUser",
    JSON.stringify({ role: "employees", data: employee })
  )
  return true
}

function handleTaskStatusChange(taskIndex, status) {
  const currentEmployees = Array.isArray(userData) ? userData : []
  const currentEmployee = userLogInData
  if (!currentEmployee) return false

  let updatedEmployee
  const updatedEmployees = currentEmployees.map((employee) => {
    if (employee.email !== currentEmployee.email) return employee

    const tasks = employee.tasks.map((task, index) => {
      if (index !== taskIndex) return task

      const isNew = status === 'newTask'
      const isActive = status === 'active'
      const isCompleted = status === 'completedTask'
      const isFailed = status === 'failedTask'
      return {
        ...task,
        active: isActive,
        newTask: isNew,
        completedTask: isCompleted,
        failedTask: isFailed,
      }
    })

    const taskNumbers = tasks.reduce(
      (counts, task) => {
        if (task.newTask) counts.newTask += 1
        else if (task.active) counts.active += 1
        else if (task.completedTask) counts.completedTask += 1
        else if (task.failedTask) counts.failedTask += 1
        return counts
      },
      { active: 0, newTask: 0, completedTask: 0, failedTask: 0 }
    )

    updatedEmployee = { ...employee, tasks, taskNumbers }
    return updatedEmployee
  })

  if (!updatedEmployee) return false

  try {
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    localStorage.setItem(
      'LogInUser',
      JSON.stringify({ role: 'employees', data: updatedEmployee })
    )
  } catch {
    return false
  }

  setUserData(updatedEmployees)
  setUserLogInData(updatedEmployee)
  return true
}

  return (
    <>
    <div>
      {!user ? < Login handleLogin={handleLogin}/> : ''}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : (user == 'employees' ? <EmployeeDashboard changeUser={setUser} data={userLogInData} onTaskStatusChange={handleTaskStatusChange} /> : null )}
  
    </div>
    </>
  )
}

export default App
