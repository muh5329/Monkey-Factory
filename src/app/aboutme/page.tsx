
import Image from 'next/image'
export default function AboutMePage
  () {
  return (
    <main className="flex flex-col justify-start h-dvh bg-red-400">
      <div className='grid grid-rows-3 grid-flow-col gap-4 justify-start pt-20 pl-5 '>

        <div className='rounded-lg w-[200px] h-[200px] shadow-2xl overflow-hidden relative'>
          <Image
            src="/images/me.png"
            layout='fill'
            objectFit='cover'
            alt="Picture of the author"
          />
        </div>

        <div className='row-span-3 col-span-2  text-black'>
          Hello! My name is Muneeb Haq and i have been programming proffessionally since August 2015.
          Programming has been a passion for me long before that, and it all started with a love for video games.
          Ever since i picked up my first video game to trying to create mods for Warcraft III , i have been obsessed
          in trying to make my own games and experiences.


          <div className='pt-10'>
            This led me into a life long love and passion in Computer Science.
          </div>
        </div>

      </div>

    </main>
  );
}
