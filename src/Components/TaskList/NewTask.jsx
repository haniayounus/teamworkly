const cardClass =
  'flex min-h-[18rem] w-[min(84vw,22rem)] shrink-0 flex-col rounded-md border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_8px_24px_-18px_rgba(37,41,33,0.35)]'

const NewTask = ({ data, onStatusChange }) => {
  return (
    <article className={cardClass}>
      <div className='flex items-center justify-between gap-3'>
        <span className='rounded-sm bg-[var(--ochre-wash)] px-2.5 py-1 text-xs font-semibold text-[var(--ochre)]'>
          New
        </span>
        <time className='text-sm tabular-nums text-[var(--muted)]'>{data.taskDate}</time>
      </div>
      <p className='mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]'>{data.category}</p>
      <h3 className='mt-1 font-serif text-2xl font-semibold leading-snug text-[var(--ink)]'>{data.taskTitle}</h3>
      <p className='mt-3 flex-1 whitespace-pre-wrap text-sm leading-6 text-[var(--muted)]'>{data.taskDescription}</p>
      <div className='mt-5 flex flex-wrap gap-2 border-t border-[var(--line)] pt-4'>
        <button
          type='button'
          onClick={() => onStatusChange('active')}
          className='rounded-md bg-[var(--forest)] px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--forest-deep)]'
        >
          Accept task
        </button>
        <button
          type='button'
          onClick={() => onStatusChange('failedTask')}
          className='rounded-md border border-[var(--line)] px-3.5 py-2 text-sm font-semibold text-[var(--clay)] transition-colors hover:border-[#d2a99c] hover:bg-[var(--clay-wash)]'
        >
          Mark as failed
        </button>
      </div>
    </article>
  )
}

export default NewTask
