import { useContext } from 'react'
import { Context } from '../../Context/AuthContext'

const taskColumns = [
  { key: 'active', label: 'Active tasks' },
  { key: 'newTask', label: 'New tasks' },
  { key: 'completedTask', label: 'Completed' },
  { key: 'failedTask', label: 'Failed' },
]

const AllTasks = () => {
  const [userData] = useContext(Context)
  const employees = Array.isArray(userData) ? userData : []

  return (
    <section
      aria-labelledby='team-tasks-title'
      className='overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface)] shadow-[0_8px_24px_-18px_rgba(37,41,33,0.35)]'
    >
      <header className='flex items-baseline justify-between gap-4 px-5 py-5 sm:px-6'>
        <h2 id='team-tasks-title' className='font-serif text-2xl font-semibold text-[var(--ink)]'>
          Team task totals
        </h2>
        <p className='text-sm text-[var(--muted)]'>
          {employees.length} {employees.length === 1 ? 'employee' : 'employees'}
        </p>
      </header>
      <div className='overflow-x-auto'>
        <table className='w-full min-w-[640px] border-collapse text-left text-sm'>
          <thead>
            <tr className='border-y border-[var(--line)] bg-[var(--surface-muted)] text-[var(--muted)]'>
              <th scope='col' className='px-5 py-3 font-semibold sm:px-6'>Employee</th>
              {taskColumns.map((column) => (
                <th key={column.key} scope='col' className='px-4 py-3 text-right font-semibold'>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-[var(--line)]'>
            {employees.length === 0 ? (
              <tr>
                <td colSpan={taskColumns.length + 1} className='px-5 py-10 text-center text-[var(--muted)]'>
                  No employees yet.
                </td>
              </tr>
            ) : (
              employees.map((employee) => (
                <tr key={employee.id ?? employee.email} className='transition-colors hover:bg-[#f8f6f0]'>
                  <th scope='row' className='px-5 py-4 font-semibold text-[var(--ink)] sm:px-6'>
                    {employee.firstName}
                  </th>
                  {taskColumns.map((column) => (
                    <td key={column.key} className='px-4 py-4 text-right tabular-nums text-[var(--ink)]'>
                      {employee.taskNumbers?.[column.key] ?? 0}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AllTasks
