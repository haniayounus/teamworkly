import Header from '../EmployeeDashboardComponents/Header'
import GivenTasks from '../EmployeeDashboardComponents/GivenTasks'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = (props) => {

  
  return (
  <div className='min-h-screen w-full bg-[var(--paper)] text-[var(--ink)]'>
   
      <Header  data={props.data} changeUser={props.changeUser}/>
      <GivenTasks data={props.data} />
      <Tasklist data={props.data} onTaskStatusChange={props.onTaskStatusChange} />
    </div>
  )
}

export default EmployeeDashboard
