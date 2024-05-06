
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
          Hey there!  My name is Muneeb Haq and i have been programming professionally since August of 2015. I got my start into
          the world of computer science begining from a very young age. It started with
          me tinkering around with Warcraft III Custom maps and turned into  an effort
          in me learning how to make my own video games. This led me to computer science
          and has been a deeply gratifying journey ever since.


          <div className='pt-5'>
            While my origins started in a desire to get into game development, my true
            passion to create and learn has allowed me to experiene many different facets of this field.
            I started my career as a UI developer making health care websites used by millions, i have
            gone through and transitioned into a variety of different roles ranging from middleware
            service development, devops infrastructuring, or even big data real time data analtics and
            proccessing.
          </div>

          <div className='pt-5'>
            I still hold that original flame deep in my heart for game development and 3D graphics
            programming, albiet not in a professional capacity. Many of my side projects and passions
            still revolve on creating games and 3D experiences in WebGL for example. I do try not
            to limit my self to just 3D apps, and try to always explore new langauges and paradigms.

          </div>

        </div>

      </div>

    </main>
  );
}
