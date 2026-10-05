const Header = (props) => {

  const handleLogOut = () => {
    localStorage.setItem("LogInUser" , '')
    props.changeUser('')
  }


  return (
    <header className='border-b border-[var(--line)] bg-[var(--surface)]'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[var(--forest)]'>Employee portal</p>
          <h1 className='mt-1 font-serif text-3xl font-semibold tracking-tight text-[var(--ink)]'>
            Welcome, {props.data.firstName}
          </h1>
        </div>
        <button
          type='button'
          className='rounded-md border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--clay)] hover:bg-[var(--clay-wash)] hover:text-[var(--clay)]'
          onClick={handleLogOut}
        >
          Log out
        </button>
      </div>
    </header>
  )
}

export default Header
