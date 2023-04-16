import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Heart, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Maximize2 } from 'lucide-react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

const Home = () => {
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
        <main className="flex-1  p-6">
          <div className='flex gap-4 items-center'>
            <button className='bg-black/40 rounded-full p-2'>
              <ChevronLeft />
            </button>
            <button className='bg-black/40 rounded-full p-2'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-bold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-5 mt-4'>
            <a className='bg-white/5 flex gap-4 items-center rounded overflow-hidden transition-colors hover:bg-white/10 group'>
              <Image src='/album.jpg' width={104} height={104} alt='Wasting Light' />
              <div className='flex flex-row items-center justify-between w-[70%] px-3'>
                <strong>Wasting Light</strong>
                  <button className='flex items-center justify-center invisible group-hover:visible bg-green-600 rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                    <FaPlay color={'#123'} />
                  </button>
              </div>          
            </a>
            <a className='bg-white/5 flex gap-4 items-center rounded overflow-hidden transition-colors hover:bg-white/10 group'>
              <Image src='/red_hot_album.jpg' width={104} height={104} alt='Blood Sugar Sex Magic' />
              <div className='flex flex-row items-center justify-between w-[70%] px-3'>
                <strong>Blood Sugar Sex Magic</strong>
                  <button className='flex items-center justify-center invisible group-hover:visible bg-green-600 rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                    <FaPlay color={'#123'} />
                  </button>
              </div>
            </a>
            <a className='bg-white/5 flex gap-4 items-center rounded overflow-hidden transition-colors hover:bg-white/10 group'>
              <Image src='/guns.jpg' width={104} height={104} alt='Apptite for Destruction' />
              <div className='flex flex-row items-center justify-between w-[70%] px-3'>
                <strong>Apptite for Destruction</strong>
                  <button className='flex items-center justify-center invisible group-hover:visible bg-green-600 rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                    <FaPlay color={'#123'} />
                  </button>
              </div>
            </a>
            <a className='bg-white/5 flex gap-4 items-center rounded overflow-hidden transition-colors hover:bg-white/10 group'>
              <Image src='/maste_album.jpg' width={104} height={104} alt='Master of Puppets' />
              <div className='flex flex-row items-center justify-between w-[70%] px-3'>
                <strong>Master of Puppets</strong>
                  <button className='flex items-center justify-center invisible group-hover:visible bg-green-600 rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                    <FaPlay color={'#123'} />
                  </button>
              </div>
            </a>
            <a className='bg-white/5 flex gap-4 items-center rounded overflow-hidden transition-colors hover:bg-white/10 group'>
              <Image src='/fear.jpg' width={104} height={104} alt='Fear of the Dark' />
              <div className='flex flex-row items-center justify-between w-[70%] px-3'>
                <strong>Fear of the Dark</strong>
                  <button className='flex items-center justify-center invisible group-hover:visible bg-green-600 rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                    <FaPlay color={'#123'} />
                  </button>
              </div>
            </a>
            <a className='bg-white/5 flex gap-4 items-center rounded overflow-hidden transition-colors hover:bg-white/10 group'>
              <Image src='/roots.jpg' width={104} height={104} alt='roots' />
              <div className='flex flex-row items-center justify-between w-[70%] px-3'>
                <strong>Roots</strong>
                  <button className='flex items-center justify-center bg-green-600 invisible group-hover:visible rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                    <FaPlay color={'#123'} />
                  </button>
              </div>
            </a>
          </div>

          <h2 className='font-bold text-3xl mt-10'>Made for Egberto de Oliveira</h2>
          <div className='grid grid-cols-6 gap-5 mt-4 mb-20'>
            <a href='' className='bg-white/5 p-3 rounded-md overflow-hidden hover:bg-white/10 flex flex-col gap-2 group'>
              <Image src='/album.jpg' className='w-full rounded' width={200} height={350} alt='Wasting Light' />
              <strong className='font-semibold'>Wasting Light</strong>
              <span className='text-zinc-500 text-sm'>Foo Fitghers, David Grove, John Lousteau</span>
              <button className='absolute mt-[150px] ml-[150px] flex items-center justify-center invisible group-hover:visible bg-green-600 rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                <FaPlay size={20} color={'#000'} />
              </button>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md overflow-hidden hover:bg-white/10 flex flex-col gap-2 group'>
              <Image src='/fear.jpg' className='w-full rounded' width={200} height={350} alt='Wasting Light' />
              <strong className='font-semibold'>Fear of the Dark</strong>
              <span className='text-zinc-500 text-sm'>Iron Maiden, Bruce Dickinson, Steve Harris, Dave Murray</span>
              <button className='absolute mt-[150px] ml-[150px] flex items-center justify-center invisible group-hover:visible bg-green-600 rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                <FaPlay size={20} color={'#000'} />
              </button>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md overflow-hidden hover:bg-white/10 flex flex-col gap-2 group'>
              <Image src='/guns.jpg' className='w-full rounded' width={200} height={350} alt='Wasting Light' />
              <strong className='font-semibold'>Appetite for Destruction</strong>
              <span className='text-zinc-500 text-sm'>Guns'n Rose, Axel Rose, Slash, Duff McKagan</span>
              <button className='absolute mt-[150px] ml-[150px] flex items-center justify-center invisible group-hover:visible bg-green-600 rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                <FaPlay size={20} color={'#000'} />
              </button>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md overflow-hidden hover:bg-white/10 flex flex-col gap-2 group'>
              <Image src='/maste_album.jpg' className='w-full rounded' width={200} height={350} alt='Wasting Light' />
              <strong className='font-semibold'>Master of Puppets</strong>
              <span className='text-zinc-500 text-sm'>Metallica, James Hetfield, </span>
              <button className='absolute mt-[150px] ml-[150px] flex items-center justify-center invisible group-hover:visible bg-green-600 rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                <FaPlay size={20} color={'#000'} />
              </button>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md overflow-hidden hover:bg-white/10 flex flex-col gap-2 group'>
              <Image src='/red_hot_album.jpg' className='w-full rounded' width={200} height={350} alt='Wasting Light' />
              <strong className='font-semibold'>Blood Sugar Sex Magik</strong>
              <span className='text-zinc-500 text-sm'>Red Hot Chilli peppers, Antony kids, John Frusciante, Flea, Chad Smith</span>
              <button className='absolute mt-[150px] ml-[150px] flex items-center justify-center invisible group-hover:visible bg-green-600 rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                <FaPlay size={20} color={'#000'} />
              </button>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md overflow-hidden hover:bg-white/10 flex flex-col gap-2 group'>
              <Image src='/roots.jpg' className='w-full rounded' width={200} height={350} alt='Wasting Light' />
              <strong className='font-semibold'>Roots</strong>
              <span className='text-zinc-500 text-sm'>Sepultura, Max Cavalera, Igor Cavalera, Andreas Kisser</span>
              <button className='absolute mt-[150px] ml-[150px] flex items-center justify-center invisible group-hover:visible bg-green-600 rounded-full w-14 h-14 shadow-[0_8px_10px_0px_rgb(0,0,0,0.3)]'>
                <FaPlay size={20} color={'#000'} />
              </button>
            </a>
          </div>
        </main>
      </div>
      <footer className="fixed bottom-0 w-full p-4 bg-zinc-800 border-t border-zinc-700 flex items-center justify-between mt-10">
        <div className='flex items-center gap-3'>
          <Image src='/guns.jpg' className=' rounded' width={64} height={64} alt='Appetite for Destruction' />
          <div className='flex flex-col gap-1'>
            <strong className='font-normal hover:underline cursor-pointer'>You could be mine</strong>
            <span className='text-zinc-400 hover:text-zinc-300 text-sm'>Axel Rose, Slash</span>
          </div>
          <Heart size={20} />
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200 cursor-pointer hover:text-zinc-100'  />
            <SkipBack size={20} className='text-zinc-200 cursor-pointer hover:text-zinc-100'  />
            <button className='flex items-center justify-center p-3 rounded-full bg-zinc-200 hover:bg-zinc-100'>
              <FaPlay color='#222' className='ml-0.5' />
            </button>
            <SkipForward size={20} className='text-zinc-200 cursor-pointer hover:text-zinc-100'  />
            <Repeat size={20} className='text-zinc-200 cursor-pointer hover:text-zinc-100'  />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full bg-zinc-500 w-96 cursor-pointer'>
              <div className='h-1 rounded-full bg-zinc-200 w-32 cursor-pointer' />
            </div>
            <span className='text-sm text-zinc-400'>5:52</span>
          </div>
        </div>
          <div className='flex items-center gap-4'>
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className='flex items-center gap-4'>
              <Mic2 size={20} />
              <div className='h-1 rounded-full bg-zinc-500 w-24 cursor-pointer'>
                <div className='h-1 rounded-full bg-zinc-200 w-10 cursor-pointer' />
              </div>
            </div>
            <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  )
}

export default Home