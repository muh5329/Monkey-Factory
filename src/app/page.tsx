'use client'

import Image from 'next/image'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
interface SlidingPage {
  pageNumber: string;
  optionalName?: string;
  mainImage: string;
  pageSubtitle: string;
  linkTitle: string;
}


const SlidingPage = (props: SlidingPage) => {
  return (
    <div className="flex flex-col justify-between h-dvh">
      <div className="">
        <div className=" pl-4 text-sm pt-4 ">
          {props.optionalName}
        </div>
      </div>

      <div className="flex pt-1 h-[75%]">
        <div className="w-10 pt-4 pl-4  text-lg">
          {"[" + props.pageNumber + "]"}
        </div>

        <div className="justify-start pl-16 pt-6">

          <div className="shadow-lg ">
            <Image
              src={props.mainImage}
              width="0"
              alt=''
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
            />
          </div>


        </div>

      </div>

      <div className="flex justify-between pl-4 ">

        <div className="w-[75%] ">
          {props.pageSubtitle}
        </div>

        <div className="pr-10 grid grid-rows-2 grid-cols-1 gap-1 w-[25%] ">
          <div className=''></div>

          <div className=''>
            {/* line of full width */}
            <div className="border border-zinc-900  " />

            {/* subtitle */}
            <div className="flex justify-between pt-2 ">

              <div className=" text-xs ">
                {props.linkTitle}
              </div>

              <div className="">
                {"-->"}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div >
  );
}

export default function HomePage() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const socialsRef = useRef(null);

  const pages = [aboutRef, projectsRef, socialsRef];

  const [selectedPage, setSelectedPage] = useState(aboutRef);

  const { contextSafe } = useGSAP();


  const slidingPageOnClick = contextSafe((ref: any) => {
    setSelectedPage(ref)
    for (let page of pages) {
      if (page == ref) {
        gsap.to(page.current, { width: '100%' })
      } else {
        gsap.to(page.current, { width: 150 })
      }
    }

  });


  return (
    <main className='flex flex-row w-[100%]'>

      <div ref={aboutRef} onClick={() => slidingPageOnClick(aboutRef)} className="w-[80%] bg-red-400 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          optionalName="Muneeb Haq"
          pageNumber="01"
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="About Me"
          linkTitle="More About Me"
        />
      </div>

      <div ref={projectsRef} onClick={() => slidingPageOnClick(projectsRef)} className="w-[150px] bg-yellow-500 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          pageNumber="02"
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="Projects"
          linkTitle="See my projects"
        />
      </div>


      <div ref={socialsRef} onClick={() => slidingPageOnClick(socialsRef)} className="w-[150px] bg-blue-500 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          pageNumber="03"
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="Socials"
          linkTitle="See my socials"
        />
      </div>


    </main>
  );
} 
