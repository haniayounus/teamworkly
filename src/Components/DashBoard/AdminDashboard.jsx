import CreateTask from '../AdminDashboardComponents/CreateTask'
import AddEmployee from '../AdminDashboardComponents/AddEmployee'
import AllTasks from '../AdminDashboardComponents/AllTasks'

const AdminDashboard = (props) => {
  const handleLogOut = () => {
    localStorage.setItem('LogInUser', '')
    props.changeUser('')
  }

  return (
    <div className='min-h-screen w-full bg-[var(--paper)] text-[var(--ink)]'>
      <header className='border-b border-[var(--line)] bg-[var(--surface)]'>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[var(--forest)]'>Employee management</p>
          <h1 className='mt-1 font-serif text-3xl font-semibold tracking-tight text-[var(--ink)]'>Admin panel</h1>
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
      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-5 px-5 py-8 sm:px-8 lg:grid-cols-2'>
        <CreateTask />
        <AddEmployee />
      </div>
      <div className='mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8'>
        <AllTasks />
      </div>
    </div>
  )
}

export default AdminDashboard
