import { useContext, useState } from 'react'
import { Context } from '../../Context/AuthContext'
import { addEmployeeToLocalStorage } from '../../utils/LocalStorage'

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

const AddEmployee = () => {
  const [, setUserData] = useContext(Context)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [created, setCreated] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    setError('')
    setCreated(false)

    const normalizedFirstName = firstName.trim()
    const normalizedEmail = email.trim().toLowerCase()

    let updatedEmployees
    try {
      updatedEmployees = addEmployeeToLocalStorage({
        firstName: normalizedFirstName,
        email: normalizedEmail,
        password,
        taskNumbers: {
          active: 0,
          newTask: 0,
          completedTask: 0,
          failedTask: 0,
        },
        tasks: [],
      })
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : 'Could not save this employee. Check browser storage and try again.'
      )
      return
    }

    setUserData(updatedEmployees)
    setFirstName('')
    setEmail('')
    setPassword('')
    setCreated(true)
  }

  return (
    <section
      className='w-full overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface)] shadow-[0_8px_24px_-18px_rgba(37,41,33,0.35)]'
      aria-labelledby='add-employee-title'
    >
      <div className='border-b border-[var(--line)] bg-[var(--surface)] px-5 py-4 sm:px-6'>
        <h2 id='add-employee-title' className='font-serif text-2xl font-semibold leading-tight tracking-tight text-[var(--ink)]'>
          Add employee
        </h2>
      </div>
      <form className='flex flex-col gap-5 px-5 py-5 sm:px-6 sm:py-6' onSubmit={submitHandler}>
        {created && (
          <div
            role='status'
            className='rounded-md border border-[#b9cbb9] bg-[var(--forest-wash)] px-3 py-2.5 text-sm text-[var(--forest-deep)]'
          >
            Employee added. They can now sign in with their email and password.
          </div>
        )}
        {error && (
          <div
            role='alert'
            className='rounded-md border border-[#d9b8ad] bg-[var(--clay-wash)] px-3 py-2.5 text-sm text-[#6d2f27]'
          >
            {error}
          </div>
        )}
        <div>
          <label htmlFor='employee-first-name' className={labelClass}>
            First name
          </label>
          <input
            id='employee-first-name'
            name='firstName'
            type='text'
            autoComplete='given-name'
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor='employee-email' className={labelClass}>
            Work email
          </label>
          <input
            id='employee-email'
            name='email'
            type='email'
            autoComplete='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor='employee-password' className={labelClass}>
            Password
          </label>
          <input
            id='employee-password'
            name='password'
            type='password'
            autoComplete='new-password'
            minLength={6}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
        </div>
        <button
          type='submit'
          className={`flex h-11 w-full items-center justify-center rounded-md bg-[var(--forest)] text-base font-semibold text-white transition-colors duration-150 hover:bg-[var(--forest-deep)] active:translate-y-px ${focusRing}`}
        >
          Add employee
        </button>
      </form>
    </section>
  )
}

export default AddEmployee