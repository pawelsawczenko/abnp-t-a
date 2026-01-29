import { FaImage } from 'react-icons/fa6'

export const SkeletonCard = () => {
  return (
    <div className="relative w-xs rounded-md bg-stone-300 p-4 shadow-md transition dark:bg-slate-600">
      <div className="mb-4 flex h-48 w-full animate-pulse items-center justify-center bg-stone-200 object-scale-down dark:bg-slate-500">
        <FaImage className="text-stone-300 dark:text-slate-600" />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="h-4 w-20 animate-pulse rounded bg-stone-200 font-semibold dark:bg-slate-500"></div>

        <button
          className="w-29 animate-pulse cursor-pointer rounded-md p-4 font-semibold disabled:bg-stone-200 disabled:dark:bg-slate-500"
          disabled={true}></button>
      </div>

      <div className="mb-2 h-6 animate-pulse rounded bg-stone-200 dark:bg-slate-500"></div>

      <div className="mb-1 h-3 animate-pulse rounded bg-stone-200 dark:bg-slate-500"></div>
      <div className="mb-1 h-3 animate-pulse rounded bg-stone-200 dark:bg-slate-500"></div>
      <div className="mb-1 h-3 animate-pulse rounded bg-stone-200 dark:bg-slate-500"></div>
      <div className="mb-1 h-3 animate-pulse rounded bg-stone-200 dark:bg-slate-500"></div>
      <div className="h-3 animate-pulse rounded bg-stone-200 dark:bg-slate-500"></div>
    </div>
  )
}
