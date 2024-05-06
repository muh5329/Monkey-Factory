
import Image from 'next/image'
export default function SocialsPage
  () {
  return (
    <main className="flex items-center justify-center h-dvh bg-blue-500  ">
      <div className='flex flex-col gap-4  ' >

        <div className='rounded-full w-[200px] h-[200px] shadow-2xl overflow-hidden relative'>
          <Image
            src="/images/me.png"
            layout='fill'
            objectFit='cover'
            alt="Picture of the author"
          />
        </div>

        <div className='text-white font-bold text-center '>
          @MuneebHaq12123
        </div>

        <div className=' pt-2 pb-2 pl-16 pr-16 border-2 border-white-500 text-white font-bold text-center '>
          Twitter
        </div>

        <div className=' pt-2 pb-2 pl-16 pr-16 border-2 text-white font-bold border-white-500 text-center '>
          LinkedIn
        </div>

        <div className=' pt-2 pb-2 pl-16 pr-16 border-2 border-white-500 text-white font-bold text-center '>
          GitHub
        </div>

        <div className=' pt-2 pb-2 pl-16 pr-16 border-2 border-white-500 text-white font-bold text-center '>
          Instagram
        </div>

        <div className=' pt-2 pb-2 pl-16 pr-16 border-2 border-white-500 text-white font-bold text-center '>
          Email
        </div>

        <div className=' pt-2 pb-2 pl-16 pr-16 border-2 border-white-500 text-white font-bold text-center '>
          Website
        </div>


      </div>

    </main >
  );
}
