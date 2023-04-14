import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex gap-2 items-center'>
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className='space-y-5 mt-10'>
            <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='pt-6 mt-6 border-t border-zinc-700 flex flex-col gap-3'>
            <a href='' className='text-zinc-400 text-sm hover:text-zinc-200'>Hot hits Brasil</a>
            <a href='' className='text-zinc-400 text-sm hover:text-zinc-200'>Top Brasil</a>
            <a href='' className='text-zinc-400 text-sm hover:text-zinc-200'>Rock Nacional</a>
            <a href='' className='text-zinc-400 text-sm hover:text-zinc-200'>Heavy Metal</a>
            <a href='' className='text-zinc-400 text-sm hover:text-zinc-200'>Deep House</a>
            <a href='' className='text-zinc-400 text-sm hover:text-zinc-200'>Forró</a>
            <a href='' className='text-zinc-400 text-sm hover:text-zinc-200'>Rock Forever</a>
            <a href='' className='text-zinc-400 text-sm hover:text-zinc-200'>Groove Night</a>
            <a href='' className='text-zinc-400 text-sm hover:text-zinc-200'>Reggae Nacional</a> 
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex gap-4 items-center'>
            <button className='bg-black/40 rounded-full p-2'>
              <ChevronLeft />
            </button>
            <button className='bg-black/40 rounded-full p-2'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-bold text-3xl mt-10'>Good Afternoon</h1>
        </main>
      </div>
      <footer className="p-6 bg-zinc-800 border-t border-zinc-700">footer</footer>
    </div>
  )
}
