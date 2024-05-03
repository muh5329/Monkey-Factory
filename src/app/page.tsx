'use client'

import Image from 'next/image'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import React from 'react'

interface SlidingPage {
  pageNumber: string;
  optionalName?: string;
  mainImage: string;
  pageSubtitle: string;
  linkTitle: string;
  selected: boolean | null;
}


const SlidingPage = (props: SlidingPage) => {

  const responsiveSizes = {
    mobile: {
      image: { width: "150px", height: "200px" },
      subTile: { fontSize: "50px" },
    },
    medium: {
      image: { width: "500px", height: "500px" },
      subTile: { fontSize: "60px" },
    },
    large: {
      image: { width: "700px", height: "500px" },
      subTile: { fontSize: "100px" },
    }
  }

  const [currentSizes, setCurrentSizes] = useState(responsiveSizes.medium);


  const subtitleRef: React.RefObject<HTMLDivElement> = useRef(null);
  const imageConRef: React.RefObject<HTMLDivElement> = useRef(null);

  const { contextSafe } = useGSAP();

  const resizeSlidingPage = contextSafe(() => {
    if (props.selected) {
      gsap.to(subtitleRef.current, { fontSize: currentSizes.subTile.fontSize, paddingTop: "0px" });
      gsap.to(imageConRef.current, { width: currentSizes.image.width });
    } else {
      gsap.to(subtitleRef.current, { fontSize: '15px', paddingTop: "55px" });
      gsap.to(imageConRef.current, { width: '15px' });
    }
  });

  useGSAP(() => {
    resizeSlidingPage()
  }, [props.selected]);



  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCurrentSizes(responsiveSizes.mobile);
      } else if (window.innerWidth < 1024) {
        setCurrentSizes(responsiveSizes.medium);

      } else if (window.innerWidth < 1280) {
        setCurrentSizes(responsiveSizes.large);
      } else {
        setCurrentSizes(responsiveSizes.large);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

    <div className="flex flex-col justify-start h-dvh">
      <div className="">
        <div className=" pl-4 text-sm pt-4 ">
          {props.optionalName}
        </div>
      </div>

      <div className="flex pt-1 h-[75%]">

        {props.selected &&
          <div className="w-10 pt-4 pl-4  text-lg">
            {"[" + props.pageNumber + "]"}
          </div>
        }

        <div className="justify-start pl-16 pt-6">

          <div ref={imageConRef} className="shadow-lg w-[600px] h-[500px] overflow-hidden relative">
            <Image
              src={props.mainImage}
              layout='fill'
              alt="Picture of the author"
              objectFit='cover'
            />
          </div>


        </div>

      </div>


      <div className="flex justify-between pl-4 ">

        <div className="w-[60%] text-[15px] " ref={subtitleRef}>
          {props.pageSubtitle}
        </div>

        {props.selected &&
          <div className=" w-[30%] pr-7 pt-12">
            <div className=' row-span-2 '>
              {/* line of full width */}
              <div className="border border-zinc-900 " />

              {/* subtitle */}
              <div className="flex justify-between pt-2 row-span-5 ">

                <div className=" text-m ">
                  {props.linkTitle}
                </div>

                <div className="">
                  {"-->"}
                </div>

              </div>

            </div>

          </div>

        }

      </div>
    </div >
  );
}

export default function HomePage() {
  const aboutRef: React.RefObject<HTMLDivElement> = useRef(null);
  const projectsRef: React.RefObject<HTMLDivElement> = useRef(null);
  const socialsRef: React.RefObject<HTMLDivElement> = useRef(null);

  const pages = [aboutRef, projectsRef, socialsRef];

  const [selectedPage, setSelectedPage] = useState(aboutRef);

  const { contextSafe } = useGSAP();

  const slidingPageOnClick = contextSafe((ref: React.RefObject<HTMLDivElement>) => {
    setSelectedPage(ref)
    for (const page of pages) {
      if (page == ref) {
        gsap.to(page.current, { width: '100%' })
      } else {
        gsap.to(page.current, { width: 180 })
      }
    }

  });


  const isSelected = (ref: React.RefObject<HTMLDivElement>) => {
    return ref.current && selectedPage.current && ref.current == selectedPage.current;
  }
  const isSelectedDefaultRender = (ref: React.RefObject<HTMLDivElement>) => {
    return ref.current == selectedPage.current;
  }


  return (
    <main className='flex flex-row w-[100%] overflow-hidden'>

      <div ref={aboutRef} onClick={() => slidingPageOnClick(aboutRef)} className="w-[80%] bg-red-400 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          optionalName="Muneeb Haq"
          pageNumber="01"
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="About Me"
          linkTitle="More About Me"
          selected={isSelectedDefaultRender(aboutRef)}
        />
      </div>

      <div ref={projectsRef} onClick={() => slidingPageOnClick(projectsRef)} className="w-[150px] bg-yellow-500 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          pageNumber="02"
          optionalName=". "
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="Projects"
          linkTitle="Check out my projects"
          selected={isSelected(projectsRef)}
        />
      </div>


      <div ref={socialsRef} onClick={() => slidingPageOnClick(socialsRef)} className="w-[150px] bg-blue-500 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          pageNumber="03"
          optionalName=". "
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="Socials"
          linkTitle="Check out my socials"
          selected={isSelected(socialsRef)}
        />
      </div>


    </main>
  );
} 
