
import { useRef, useState } from 'react'

const MISMATCH = "That email or password is incorrect."

const fieldClass =
  'h-11 w-full rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 text-base text-[var(--ink)] ' +
  'placeholder:text-[#74776d] caret-[var(--forest)] transition-colors duration-150 ' +
  'hover:border-[#979789] focus:border-[var(--forest)] focus:outline-none focus:ring-1 focus:ring-[var(--forest)] ' +
  'disabled:cursor-not-allowed disabled:bg-[var(--surface-muted)] disabled:text-[var(--muted)] ' +
  'aria-[invalid=true]:border-[var(--clay)] aria-[invalid=true]:focus:ring-[var(--clay)] ' +
  '[&:-webkit-autofill]:shadow-[inset_0_0_0_100px_#fffefa] [&:-webkit-autofill]:[-webkit-text-fill-color:#252921]'

const labelClass = 'mb-1.5 block text-sm font-semibold text-[var(--ink)]'

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--forest)]'

const Login = ({
  handleLogin ,
  systemName = 'Employee Management System',
}) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [capsOn, setCapsOn] = useState(false)
  const [error, setError] = useState('')
  const passRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
    setError('')
    if (!handleLogin(email.trim(), pass)) {
      setError(MISMATCH)
      setPass('')
      passRef.current?.focus()
    }
  }

  const trackCaps = (e) => setCapsOn(e.getModifierState?.('CapsLock') ?? false)

  return (
    <main className='flex min-h-screen w-full items-center justify-center bg-[var(--paper)] px-4 py-10 text-[var(--ink)]'>
      <div className='w-full max-w-md'>
        <div className='overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface)] shadow-[0_18px_48px_-28px_rgba(37,41,33,0.42)]'>
          <div className='border-b border-[var(--line)] px-6 py-6 sm:px-8'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[var(--forest)]'>{systemName}</p>
            <h1 className='mt-2 font-serif text-3xl font-semibold leading-tight tracking-tight text-[var(--ink)]'>Staff entrance</h1>
            <p className='mt-2 text-sm leading-6 text-[var(--muted)]'>Sign in with your work email and password.</p>
          </div>

          <form className='flex flex-col gap-5 px-6 py-6 sm:px-8' onSubmit={submitHandler}>
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
              <label htmlFor='login-email' className={labelClass}>
                Work email
              </label>
              <input
                id='login-email'
                name='email'
                type='email'
                inputMode='email'
                autoComplete='off'
                required
                aria-invalid={error ? 'true' : 'false'}
                placeholder='name@company.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor='login-password' className={labelClass}>
                Password
              </label>
              <div className='relative'>
                <input
                  ref={passRef}
                  id='login-password'
                  name='password'
                  type={showPass ? 'text' : 'password'}
                  autoComplete='current-password'
                  required
                  aria-invalid={error ? 'true' : 'false'}
                  aria-describedby={capsOn ? 'login-caps' : undefined}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  onKeyDown={trackCaps}
                  onKeyUp={trackCaps}
                  onBlur={() => setCapsOn(false)}
                  className={`${fieldClass} pr-11`}
                />
                <button
                  type='button'
                  onClick={() => setShowPass((v) => !v)}
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                  aria-pressed={showPass}
                  className={`absolute right-1 top-1 grid h-9 w-9 place-items-center rounded text-[var(--muted)] transition-colors duration-150 hover:text-[var(--ink)] disabled:opacity-50 ${focusRing}`}
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path d='M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z' />
                    <circle cx='12' cy='12' r='3' />
                    {showPass && <path d='M4 4l16 16' />}
                  </svg>
                </button>
              </div>
              {capsOn && (
                <p id='login-caps' className='mt-1.5 text-sm text-[var(--muted)]'>
                  Caps Lock is on.
                </p>
              )}
            </div>

            <button
              type='submit'
              className={`flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[var(--forest)] text-base font-semibold text-white transition-colors duration-150 hover:bg-[var(--forest-deep)] active:translate-y-px disabled:cursor-wait disabled:bg-[#708873] ${focusRing}`}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login