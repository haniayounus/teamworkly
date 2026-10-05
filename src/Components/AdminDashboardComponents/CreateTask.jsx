import{ useRef, useState } from 'react'
import { Context } from '../../Context/AuthContext'
import { useContext } from 'react'

const MAX_WORDS = 500
const stubCreate = () => new Promise((resolve) => setTimeout(resolve, 600))

const countWords = (text) => {
  const t = text.trim()
  return t ? t.split(/\s+/).length : 0
}

const fieldBase =
  'w-full rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 text-base text-[var(--ink)] ' +
  'placeholder:text-[#74776d] caret-[var(--forest)] transition-colors duration-150 ' +
  'hover:border-[#979789] focus:border-[var(--forest)] focus:outline-none focus:ring-1 focus:ring-[var(--forest)] ' +
  'disabled:cursor-not-allowed disabled:bg-[var(--surface-muted)] disabled:text-[var(--muted)] ' +
  'aria-[invalid=true]:border-[var(--clay)] aria-[invalid=true]:focus:ring-[var(--clay)] ' +
  '[&:-webkit-autofill]:shadow-[inset_0_0_0_100px_#fffefa] [&:-webkit-autofill]:[-webkit-text-fill-color:#252921]'

const inputClass = `${fieldBase} h-11`
const labelClass = 'mb-1.5 block text-sm font-semibold text-[var(--ink)]'
const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--forest)]'

const CreateTask = ({ employees = [], onCreate = stubCreate, onBack }) => {

   const  [ userData , setUserData ]  = useContext(Context)
  const taskEmployees = Array.isArray(userData)
    ? userData
    : Array.isArray(employees)
      ? employees
      : []

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [created, setCreated] = useState()
  const titleRef = useRef(null)
  const descRef = useRef(null)
                  
  const words = countWords(description)
  const overBy = words - MAX_WORDS
  const tooLong = overBy > 0

  const submitHandler = async (e) => {
    e.preventDefault()
    if (loading) return
    setCreated(false)
    setError('')
    if (tooLong) {
      descRef.current?.focus()
      return
    }

    const employee = taskEmployees.find(
      (item) =>
        item.email?.toLowerCase() === assignedTo.trim().toLowerCase() ||
        item.firstName?.toLowerCase() === assignedTo.trim().toLowerCase()
    )

    if (!employee) {
      setError('Enter an employee name that matches an employee account.')
      return
    }

    setLoading(true)
    try {
      await onCreate({
        title: title.trim(),
        description: description.trim(),
        dueDate,
        assignedTo: employee.firstName,
        category: category.trim(),
      })

      const newTask = {
        taskTitle: title.trim(),
        taskDescription: description.trim(),
        taskDate: dueDate,
        category: category.trim(),
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
      }
      const updatedEmployees = taskEmployees.map((item) =>
        item.email === employee.email
          ? {
              ...item,
              tasks: [...item.tasks, newTask],
              taskNumbers: {
                ...item.taskNumbers,
                newTask: item.taskNumbers.newTask + 1,
              },
            }
          : item
      )

      localStorage.setItem('employees', JSON.stringify(updatedEmployees))
      setUserData(updatedEmployees)
      setTitle('')
      setDescription('')
      setDueDate('')
      setAssignedTo('')
      setCategory('')
      setCreated(true)

      titleRef.current?.focus()
    } catch (err) {
    
      setError(
        err instanceof TypeError
          ? "Check your connection and try again."
          : "Try again in a moment."
      )
    } finally {
      setLoading(false)
    }

  }

  return (
    <main className='w-full text-[var(--ink)]'>
      <div className='mx-auto w-full'>

        <div className='overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface)] shadow-[0_8px_24px_-18px_rgba(37,41,33,0.35)]'>
          <div className='flex items-center gap-3 border-b border-[var(--line)] bg-[var(--surface)] px-5 py-4 sm:px-6'>
            {onBack && (
              <button
                type='button'
                onClick={onBack}
                aria-label='Back'
                className='grid h-9 w-9 shrink-0 place-items-center rounded-md border border-[var(--line)] transition-colors duration-150 hover:bg-[var(--surface-muted)]'
              >
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  aria-hidden='true'
                >
                  <path d='M19 12H5' />
                  <path d='m12 19-7-7 7-7' />
                </svg>
              </button>
            )}
            <h2 className='font-serif text-2xl font-semibold leading-tight tracking-tight text-[var(--ink)]'>Create task</h2>
          </div>

          <form className='flex flex-col gap-5 px-5 py-5 sm:px-6 sm:py-6' onSubmit={submitHandler}>
            {created && (
              <div
                role='status'
                className='flex items-center gap-2 rounded-md border border-[#b9cbb9] bg-[var(--forest-wash)] px-3 py-2.5 text-sm text-[var(--forest-deep)]'
              >
                <svg
                  className='shrink-0'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  aria-hidden='true'
                >
                  <path d='M20 6 9 17l-5-5' />
                </svg>
                <span>Task created.</span>
              </div>
            )}

            {error && (
              <div
                role='alert'
                className='flex items-start gap-2 rounded-md border border-[#d9b8ad] bg-[var(--clay-wash)] px-3 py-2.5 text-sm text-[#6d2f27]'
              >
                <svg
                  className='mt-0.5 shrink-0'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  aria-hidden='true'
                >
                  <circle cx='12' cy='12' r='10' />
                  <path d='M12 8v4' />
                  <path d='M12 16h.01' />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div>
              <label htmlFor='task-title' className={labelClass}>
                Task title
              </label>
              <input
                ref={titleRef}
                id='task-title'
                name='title'
                type='text'
                required
                disabled={loading}
                placeholder='Make a UI design'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor='task-description' className={labelClass}>
                Description
              </label>
              <textarea
                ref={descRef}
                id='task-description'
                name='description'
                required
                rows={5}
                disabled={loading}
                placeholder='Detailed description of the task'
                aria-invalid={tooLong ? 'true' : 'false'}
                aria-describedby='task-description-count'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`${fieldBase} min-h-28 resize-y py-2.5`}
              />
              <p
                id='task-description-count'
                className={`mt-1.5 text-sm ${tooLong ? 'font-semibold text-[var(--clay)]' : 'text-[var(--muted)]'}`}
              >
                {tooLong
                  ? `${overBy} ${overBy === 1 ? 'word' : 'words'} over the ${MAX_WORDS}-word limit.`
                  : `${words} of ${MAX_WORDS} words`}
              </p>
            </div>

            <div>
              <label htmlFor='task-date' className={labelClass}>
                Due date
              </label>
              <input
                id='task-date'
                name='dueDate'
                type='date'
                required
                disabled={loading}
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor='task-assignee' className={labelClass}>
                Assign to
              </label>
              {taskEmployees.length > 0 ? (
                <div className='relative'>
                  <select
                    id='task-assignee'
                    name='assignedTo'
                    required
                    disabled={loading}
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    className={`${inputClass} appearance-none pr-10 ${assignedTo ? '' : 'text-[#74776d]'}`}
                  >
                    <option value=''>Choose an employee</option>
                    {taskEmployees.map((emp) => (
                      <option key={emp.id} value={emp.email} className='text-[var(--ink)]'>
                        {emp.firstName} - {emp.email}
                      </option>
                    ))}
                  </select>
                  <svg
                    className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)]'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path d='m6 9 6 6 6-6' />
                  </svg>
                </div>
              ) : (
                <input
                  id='task-assignee'
                  name='assignedTo'
                  type='text'
                  required
                  disabled={loading}
                  placeholder='Employee name'
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                  className={inputClass}
                />
              )}
            </div>

            <div>
              <label htmlFor='task-category' className={labelClass}>
                Category
              </label>
              <input
                id='task-category'
                name='category'
                type='text'
                list='task-categories'
                required
                disabled={loading}
                placeholder='Design, Development, etc.'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={inputClass}
              />
              <datalist id='task-categories'>
                <option value='Design' />
                <option value='Development' />
              </datalist>
            </div>

            <button
              type='submit'
              disabled={loading}
              className={`flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[var(--forest)] text-base font-semibold text-white transition-colors duration-150 hover:bg-[var(--forest-deep)] active:translate-y-px disabled:cursor-wait disabled:bg-[#708873] ${focusRing}`}
            >
              {loading && (
                <svg
                  className='animate-spin motion-reduce:animate-none'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='3'
                  strokeLinecap='round'
                  aria-hidden='true'
                >
                  <path d='M12 3a9 9 0 1 0 9 9' />
                </svg>
              )}
              {loading ? 'Creating…' : 'Create task'}
            </button>
          </form>
        </div>

      </div>
    </main>
  )
}

export default CreateTask