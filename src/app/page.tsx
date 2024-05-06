'use client'

import Image from 'next/image'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import React from 'react'
import { Large, Medium, ResponsiveSizes, Small, Xsmall } from '~/model/responsiveSizes';
import { useRouter } from 'next/navigation'

interface SlidingPage {
  pageNumber: string;
  optionalName?: string;
  mainImage: string;
  pageSubtitle: string;
  linkTitle: string;
  selected: boolean | null;
  route: string;
}


const SlidingPage = (props: SlidingPage) => {


  const responsiveSizes: ResponsiveSizes = {
    xsmall: {
      id: "xsmall",
      image: { width: "100px", height: "100px" },
      subTile: { fontSize: "30px" },
      linkText: { fontSize: "10px" },
    },
    small: {
      id: "small",
      image: { width: "150px", height: "500px" },
      subTile: { fontSize: "50px" },
      linkText: { fontSize: "17px" },
    },
    medium: {
      id: "medium",
      image: { width: "500px", height: "500px" },
      subTile: { fontSize: "60px" },
      linkText: { fontSize: "17px" },
    },
    large: {
      id: "large",
      image: { width: "700px", height: "500px" },
      subTile: { fontSize: "100px" },
      linkText: { fontSize: "17px" },
    }
  }


  const subtitleRef: React.RefObject<HTMLDivElement> = useRef(null);
  const imageConRef: React.RefObject<HTMLDivElement> = useRef(null);
  const linkConf: React.RefObject<HTMLDivElement> = useRef(null);
  const [currentSizes, setCurrentSizes] = useState(responsiveSizes.medium);
  const [isMobile, setIsMobile] = useState(false);
  const { contextSafe } = useGSAP();

  const resizeSlidingPage = contextSafe(() => {
    if (props.selected) {
      gsap.to(subtitleRef.current, { fontSize: currentSizes.subTile.fontSize, paddingTop: "0px" });
      gsap.to(imageConRef.current, { width: currentSizes.image.width });
      gsap.to(linkConf.current, { fontSize: currentSizes.linkText.fontSize });
    } else {
      gsap.to(subtitleRef.current, { fontSize: '15px', paddingTop: "55px" });
      gsap.to(imageConRef.current, { width: '15px' });
      gsap.to(linkConf.current, { fontSize: "17px" });
    }
  });

  useGSAP(() => {
    resizeSlidingPage()
  }, { dependencies: [props.selected] });

  useEffect(() => {
    resizeSlidingPage();
  }, [currentSizes]);


  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth < 500) {
        setCurrentSizes(responsiveSizes.xsmall);
        setIsMobile(true);
      } else if (window.innerWidth < 768) {
        setCurrentSizes(responsiveSizes.small);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setCurrentSizes(responsiveSizes.medium);
        setIsMobile(false);
      } else if (window.innerWidth < 1280) {
        setCurrentSizes(responsiveSizes.large);
        setIsMobile(false);
      } else {
        setCurrentSizes(responsiveSizes.large);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const router = useRouter();

  return (

    <div className="flex flex-col justify-start h-dvh">
      <div className="">
        <div className=" pl-4 text-sm pt-4 ">
          {props.optionalName}
        </div>
      </div>

      <div className="flex pt-1 ">

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
          <div onClick={() => router.push(props.route)} className=" w-[30%] pr-7 pt-12">
            <div className=' row-span-2 '>
              {/* line of full width */}
              <div className="border border-zinc-900 " />

              {/* subtitle */}
              <div className="flex justify-between pt-2 row-span-5 ">

                <div ref={linkConf} className=" text-[17px] ">
                  {props.linkTitle}
                </div>

                {!isMobile &&
                  <div className="">
                    {"-->"}
                  </div>
                }
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

      <div ref={aboutRef} onClick={() => slidingPageOnClick(aboutRef)} className="w-[100%] bg-red-400 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          optionalName="Muneeb Haq"
          pageNumber="01"
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="About Me"
          linkTitle="More About Me"
          selected={isSelectedDefaultRender(aboutRef)}
          route='/aboutme'
        />
      </div>

      <div ref={projectsRef} onClick={() => slidingPageOnClick(projectsRef)} className="w-[180px] bg-yellow-500 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          pageNumber="02"
          optionalName=". "
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="Projects"
          linkTitle="See my projects"
          selected={isSelected(projectsRef)}
          route='/projects'
        />
      </div>


      <div ref={socialsRef} onClick={() => slidingPageOnClick(socialsRef)} className="w-[180px] bg-blue-500 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
        <SlidingPage
          pageNumber="03"
          optionalName=". "
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="Socials"
          linkTitle="See my socials"
          selected={isSelected(socialsRef)}
          route='/socials'
        />
      </div>


    </main>
  );
} 
