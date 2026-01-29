import { FaStore } from 'react-icons/fa6'
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle'

export const Header = () => {
  return (
    <header className="flex justify-center bg-stone-400 p-4 dark:bg-slate-900">
      <div className="flex w-xs justify-between md:w-2xl xl:w-5xl">
        <FaStore className="text-black dark:text-white" />
        <DarkModeToggle />
      </div>
    </header>
  )
}
