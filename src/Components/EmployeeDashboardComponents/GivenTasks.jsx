const taskStatuses = [
  { key: 'active', label: 'Active tasks', tone: 'text-[var(--forest)]' },
  { key: 'newTask', label: 'New tasks', tone: 'text-[var(--ochre)]' },
  { key: 'completedTask', label: 'Completed', tone: 'text-[var(--forest)]' },
  { key: 'failedTask', label: 'Failed', tone: 'text-[var(--clay)]' },
]

const GivenTasks = ({ data }) => {
  return (
    <section aria-label='Task totals' className='mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-6 sm:px-8 md:grid-cols-4 md:gap-4'>
      {taskStatuses.map((status) => (
        <div
          key={status.key}
          className='rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-4 sm:px-5'
        >
          <p className='text-sm font-medium text-[var(--muted)]'>{status.label}</p>
          <p className={`mt-2 font-serif text-3xl font-semibold tabular-nums ${status.tone}`}>
            {data.taskNumbers[status.key]}
          </p>
        </div>
      ))}
    </section>
  )
}

export default GivenTasks
