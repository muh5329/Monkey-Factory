'use client'

import Image from 'next/image'
export default function AboutMePage
  () {
  return (
    <main className="flex flex-col  min-h-screen bg-red-400">
      <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  gap-4  p-20   '>

       

        <div className='rounded-full w-[250px] h-[200px] shadow-2xl overflow-hidden  border-2 border-sky-300 relative inset-0 '>
          <Image
             src="/images/me.png"
            layout='fill'
            objectFit='cover'
            alt="Picture of the website or project"
          />
        </div>

        <div className='row-span-3 col-span-2  text-black  '>
          <div className='mt-10 p-3 rounded-lg  bg-slate-100 border-2 border-sky-300'>
            Hey there!  My name is Muneeb Haq and i have been programming professionally since August of 2015. I got my start into
            the world of computer science begining from a very young age. It started with
            me tinkering around with Warcraft III Custom maps and turned into  an effort
            in me learning how to make my own video games. This led me to computer science
            and has been a deeply gratifying journey ever since.
          </div>

          <div className='mt-10 p-3 rounded-lg  bg-slate-200 border-2 border-sky-400'>
            While my origins started in a desire to get into game development, my true
            passion to create and learn has allowed me to experiene many different facets of this field.
            I started my career as a UI developer making health care websites used by millions, i have
            gone through and transitioned into a variety of different roles ranging from middleware
            service development, devops infrastructuring, or even big data real time data analtics and
            proccessing.
          </div>

          <div className='mt-10 p-3 rounded-lg  bg-slate-300 border-2 border-sky-500'>
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
