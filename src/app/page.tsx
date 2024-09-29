'use client'

import Image from 'next/image'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import React from 'react'
import { ResponsiveSizes, Size } from '~/model/responsiveSizes';
import { useRouter } from 'next/navigation'
import * as Swetrix from 'swetrix'

interface SlidingPage {
  pageNumber: string;
  optionalName?: string;
  mainImage: string;
  pageSubtitle: string;
  linkTitle: string;
  selected: boolean | null;
  route: string;
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  currentSizes: Size | undefined;
}
const responsiveSizes: ResponsiveSizes = {
  mobile: {
    id: "mobile",
    image: { width: "250px", height: "350px" },
    subTile: { fontSize: "50px" },
    linkText: { fontSize: "13px", },
    padding: { paddingTop: "0px" }
  },
  small: {
    id: "small",
    image: { width: "400px", height: "350px" },
    subTile: { fontSize: "50px" },
    linkText: { fontSize: "17px" },
    padding: { paddingTop: "0px" }
  },
  medium: {
    id: "medium",
    image: { width: "400px", height: "500px" },
    subTile: { fontSize: "60px" },
    linkText: { fontSize: "17px" },
    padding: { paddingTop: "0px" }
  },
  large: {
    id: "large",
    image: { width: "700px", height: "500px" },
    subTile: { fontSize: "100px" },
    linkText: { fontSize: "17px" },
    padding: { paddingTop: "0px" }
  },
  collapsed: {
    id: "collapsed",
    image: { width: "15px", height: "500px" },
    subTile: { fontSize: "15px" },
    linkText: { fontSize: "17px" },
    padding: { paddingTop: "55px" }
  },
  mobileCollapsed: {
    id: "collapsed",
    image: { width: "230px", height: "15px" },
    subTile: { fontSize: "15px" },
    linkText: { fontSize: "17px" },
    padding: { paddingTop: "10px" }
  }
}



const SlidingPage = (props: SlidingPage) => {
  const subtitleRef: React.RefObject<HTMLDivElement> = useRef(null);
  const imageConRef: React.RefObject<HTMLDivElement> = useRef(null);
  const linkConf: React.RefObject<HTMLDivElement> = useRef(null);
  const { contextSafe } = useGSAP();

  const resizeSlidingPage = contextSafe(() => {

    let subTileFontSize, imageWidth, paddingTop, imageHeight, linkFontSize = "";
    if (props.selected && props.currentSizes) {
      subTileFontSize = props.currentSizes.subTile.fontSize;
      paddingTop = props.currentSizes.padding.paddingTop;
      imageWidth = props.currentSizes.image.width;
      imageHeight = props.currentSizes.image.height;
      linkFontSize = props.currentSizes.linkText.fontSize;
    } else if (responsiveSizes.collapsed && !props.isMobile) {
      subTileFontSize = responsiveSizes.collapsed.subTile.fontSize;
      paddingTop = responsiveSizes.collapsed.padding.paddingTop;
      imageWidth = responsiveSizes.collapsed.image.width;
      imageHeight = responsiveSizes.collapsed.image.height;
      linkFontSize = responsiveSizes.collapsed.linkText.fontSize;
    } else if (responsiveSizes.mobileCollapsed && props.isMobile) {
      subTileFontSize = responsiveSizes.mobileCollapsed.subTile.fontSize;
      paddingTop = responsiveSizes.mobileCollapsed.padding.paddingTop;
      imageWidth = responsiveSizes.mobileCollapsed.image.width;
      imageHeight = responsiveSizes.mobileCollapsed.image.height;
      linkFontSize = responsiveSizes.mobileCollapsed.linkText.fontSize;
    }

    gsap.to(subtitleRef.current, { fontSize: subTileFontSize, paddingTop: paddingTop });
    gsap.to(imageConRef.current, { width: imageWidth, height: imageHeight });
    gsap.to(linkConf.current, { fontSize: linkFontSize });


  });

  useGSAP(() => {
    resizeSlidingPage()
  }, { dependencies: [props.selected] });

  useEffect(() => {
    resizeSlidingPage();
  }, [props.currentSizes]);




  const router = useRouter();

  return (

    <div className="flex flex-col justify-start h-dvh">
      {!props.isMobile &&
        <div className="">
          <div className=" pl-4 text-sm pt-4 ">
            {props.optionalName}
          </div>
        </div>
      }

      <div className="flex pt-1 ">

        {(props.selected == true || props.isMobile == true)&&
          <div className="w-10 pt-4 pl-4  text-lg">
            {props.isMobile && !props.selected? props.pageSubtitle : "[" + props.pageNumber + "]"}
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
          {props.isMobile && !props.selected ?"" :props.pageSubtitle}
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
                {!props.isMobile &&
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
  useEffect(() => {
    Swetrix.init('monkey-factory');
    void Swetrix.trackViews();
  }, []);


  const aboutRef: React.RefObject<HTMLDivElement> = useRef(null);
  const projectsRef: React.RefObject<HTMLDivElement> = useRef(null);
  const socialsRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [currentSizes, setCurrentSizes] = useState<Size | undefined>(responsiveSizes.medium);
  const pages = [aboutRef, projectsRef, socialsRef];
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [selectedPage, setSelectedPage] = useState(aboutRef);
  const { contextSafe } = useGSAP();

  const slidingPageOnClick = contextSafe((ref: React.RefObject<HTMLDivElement>, mobileView = isMobile) => {
    setSelectedPage(ref)
    for (const page of pages) {
      if (mobileView) {
        if (page == ref) {
          gsap.to(page.current, { height: '80%', width: '100%' })
        } else {
          gsap.to(page.current, { height: "10%", width: '100%' })
        }
      } else {
        if (page == ref) {
          gsap.to(page.current, { width: '100%', height: '100%' })
        } else {
          gsap.to(page.current, { width: 180, height: '100%' })
        }
      }
    }

  });
  1
  useEffect(() => {
    const handleResize = () => {
      let mobileView = false
      if (window.innerWidth < 500) {
        setCurrentSizes(responsiveSizes.mobile);
        mobileView = true;
        setIsMobile(mobileView);
      } else if (window.innerWidth < 768) {
        setCurrentSizes(responsiveSizes.small);
        mobileView = true;
        setIsMobile(mobileView);
      } else if (window.innerWidth < 1024) {
        setCurrentSizes(responsiveSizes.medium);
        setIsMobile(mobileView);
      } else if (window.innerWidth < 1280) {
        setCurrentSizes(responsiveSizes.large);
        setIsMobile(mobileView);
      } else {
        setCurrentSizes(responsiveSizes.large);
        setIsMobile(mobileView);
      }
      slidingPageOnClick(selectedPage, mobileView)
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSelected = (ref: React.RefObject<HTMLDivElement>) => {
    return ref.current && selectedPage.current && ref.current == selectedPage.current;
  }
  const isSelectedDefaultRender = (ref: React.RefObject<HTMLDivElement>) => {
    return ref.current == selectedPage.current;
  }
  const slidingPageClass = 'flex w-[100%] overflow-hidden flex-row h-dvh';
  const slidingPageClassMobile = 'flex w-[100%] overflow-hidden flex-col h-dvh';

  return (
    <main className={isMobile ? slidingPageClassMobile : slidingPageClass}>
      <div ref={aboutRef} onClick={() => slidingPageOnClick(aboutRef)} className="w-[100%]  animate-slide bg-red-400 pt-1 text-zinc-900 font-medium font-scopeone z-0  ">
        <SlidingPage
          optionalName="Muneeb Haq"
          pageNumber="01"
          mainImage="/rooms/room_1.jpg"
          pageSubtitle="About"
          linkTitle="More About Me"
          selected={isSelectedDefaultRender(aboutRef)}
          route='/aboutme'
          setIsMobile={setIsMobile}
          isMobile={isMobile}
          currentSizes={currentSizes}
        />
      </div>
      <div ref={projectsRef} onClick={() => slidingPageOnClick(projectsRef)} className="w-[180px] animate-pan bg-yellow-500 pt-1 text-zinc-900 font-medium font-scopeone z-0 ">
        <SlidingPage
          pageNumber="02"
          optionalName=". "
          mainImage="/rooms/room_2.jpg"
          pageSubtitle="Projects"
          linkTitle="See my projects"
          selected={isSelected(projectsRef)}
          route='/projects'
          setIsMobile={setIsMobile}
          isMobile={isMobile}
          currentSizes={currentSizes}
        />
      </div>


      <div ref={socialsRef} onClick={() => slidingPageOnClick(socialsRef)} className="w-[180px]  animate-pan bg-blue-500 pt-1 text-zinc-900 font-medium font-scopeone z-0">
        <SlidingPage
          pageNumber="03"
          optionalName=". "
          mainImage="/rooms/room_3.jpg"
          pageSubtitle="Socials"
          linkTitle="See my socials"
          selected={isSelected(socialsRef)}
          route='/socials'
          setIsMobile={setIsMobile}
          isMobile={isMobile}
          currentSizes={currentSizes}
        />
      </div>


    </main >
  );
} 
