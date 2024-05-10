
import Image from 'next/image'
export default function SocialsPage
  () {
  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-500  ">
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
          @Muneeb22125325
        </div>

        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Muneeb22125325">
          <div className=' pt-2 pb-2 pl-16 pr-16 border-2 border-white-500 text-white font-bold text-center '>
            Twitter
          </div>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muneeb-haq-87b96098/">
          <div className=' pt-2 pb-2 pl-16 pr-16 border-2 text-white font-bold border-white-500 text-center '>
            LinkedIn
          </div>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://github.com/muh5329">
          <div className=' pt-2 pb-2 pl-16 pr-16 border-2 border-white-500 text-white font-bold text-center '>
            GitHub
          </div>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://github.com/muh5329">
          <div className=' pt-2 pb-2 pl-16 pr-16 border-2 border-white-500 text-white font-bold text-center '>
            Instagram
          </div>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="mailto:muh5329@gmail.com">
          <div className=' pt-2 pb-2 pl-16 pr-16 border-2 border-white-500 text-white font-bold text-center '>
            Email
          </div>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.monkeyfactory.org/">
          <div className=' pt-2 pb-2 pl-16 pr-16 border-2 border-white-500 text-white font-bold text-center '>
            Website
          </div>
        </a>

      </div>

    </main >
  );
}
