import { useState } from 'react'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import AccepTask from './AccepTask'

const Tasklist = ({data, onTaskStatusChange}) => {
  const [statusError, setStatusError] = useState('')
  const updateStatus = (index, status) => {
    setStatusError('')
    if (!onTaskStatusChange(index, status)) {
      setStatusError('Could not save the task update. Please try again.')
    }
  }

  return (
    <section aria-labelledby='employee-tasks-title' className='mx-auto max-w-7xl pb-10'>
      <div className='flex items-end justify-between gap-4 px-5 pb-3 sm:px-8'>
        <h2 id='employee-tasks-title' className='font-serif text-2xl font-semibold text-[var(--ink)]'>
          Your tasks
        </h2>
        <p className='text-sm text-[var(--muted)]'>
          {data.tasks.length} {data.tasks.length === 1 ? 'task' : 'tasks'}
        </p>
      </div>
      {statusError && (
        <p role='alert' className='mx-5 mb-3 rounded-md border border-[#d9b8ad] bg-[var(--clay-wash)] px-4 py-3 text-sm font-medium text-[#6d2f27] sm:mx-8'>
          {statusError}
        </p>
      )}
      <div id='TaskList' className='flex min-h-[18rem] items-stretch gap-4 overflow-x-auto px-5 py-2 sm:px-8'>
        {data.tasks.map((task, index) => {
          if (task.completedTask) {
            return <CompleteTask key={index} data={task} />
          }
          if (task.failedTask) {
            return <FailedTask key={index} data={task} />
          }
          if (task.newTask) {
            return <NewTask key={index} data={task} onStatusChange={(status) => updateStatus(index, status)} />
          }
          if (task.active) {
            return <AccepTask key={index} data={task} onStatusChange={(status) => updateStatus(index, status)} />
          }
          return null
        })}
        {data.tasks.length === 0 && (
          <p className='w-full rounded-md border border-dashed border-[var(--line)] px-5 py-12 text-center text-sm text-[var(--muted)]'>
            No tasks have been assigned yet.
          </p>
        )}
      </div>
    </section>
  )
}

export default Tasklist
