'use client'

import { Project } from "./page";
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import Image from 'next/image'

interface Board {
    tags : string[]
    projectList : Array<Project>
    projects : Array<Project>
}

interface TagProps {
  selectedTags : string[]
  unselectedTags : string[]
  setSelectedTags : Dispatch<SetStateAction<string[]>>
  setUnselectedTags : Dispatch<SetStateAction<string[]>>
  projectList : Array<Project>
  setProjectList :  Dispatch<SetStateAction<Array<Project>>>
  projects: Array<Project>
}

const Tags = (props :TagProps) =>{

  function intersection<T>(arr1: T[], arr2: T[]): T[] {
      return arr1.filter(value => arr2.includes(value));
  }

  const unSelectAllTags  = () => {
    const selectedTags = [...props.selectedTags]
    const unselectedTags = [...props.unselectedTags]
    for (const  tag of selectedTags){
      unselectedTags.push(tag)
    }
    props.setUnselectedTags(unselectedTags);
    props.setSelectedTags([]);
    props.setProjectList(filterBySelectedTags( props.projects, []));
  }

  const selectTag = (tag: string) => {
    props.setSelectedTags([...props.selectedTags, tag]);
    props.setUnselectedTags(props.unselectedTags.filter(item => item !== tag));
    props.setProjectList(filterBySelectedTags( props.projects, [...props.selectedTags, tag]));
  }
  
  const unselectTag = (tag: string) => {
    props.setUnselectedTags([...props.unselectedTags, tag]);
    const updatedItems = props.selectedTags.filter(item => item !== tag);
    props.setSelectedTags(updatedItems);
    props.setProjectList(filterBySelectedTags( props.projects, updatedItems));
  }

  const filterBySelectedTags = (projects: Array<Project>, selectedTags: string[]): Array<Project> => {
    if (selectedTags.length > 0) {
        return projects.filter((item) => intersection(item.tags, selectedTags).length > 0)
    } else {
        return projects;
    }
  }

  return (<>
      {props.selectedTags.length > 0 &&
        <div id="div2"className="bg-slate-200  rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center" onClick={() => unSelectAllTags()}>
          All
        </div>
      }

      {props.selectedTags.length <= 0 &&
        <div className="bg-slate-500  rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center" >
          All
        </div>
      }


      {props.selectedTags.map((tag, i) =>
        <div key={i} id={i.toString()} className="bg-slate-500  whitespace-nowrap rounded-lg pt-1 pb-1 pl-2 pr-2 text-center" onClick={() => unselectTag(tag)}>
          {tag}
        </div>
      )}
      {props.unselectedTags.map((tag, i) =>
        <div key={i} id={i.toString()} className="bg-slate-200  whitespace-nowrap rounded-lg pt-1 pb-1 pl-2 pr-2 text-center" onClick={() => selectTag(tag)} >
          {tag}
        </div>
      )}

  </>);
}

  
export default function Board(props:Board) {
    const [selectedTags,setSelectedTags]  = useState<string[]>([]);
    const [unselectedTags, setUnselectedTags] = useState<string[]>(props.tags);
    const [projectList,setProjectList] = useState(props.projectList);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollToRight = () => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        scrollRef.current.scrollTo({
          left: scrollWidth,
          behavior: 'smooth'
        });
      }
    };

    const scrollToLeft = () => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        scrollRef.current.scrollTo({
          left: -scrollWidth,
          behavior: 'smooth'
        });
      }
    };

    return (<>
        

        <div className='flex p-10 w-[90%]  ml-[40px] '>

          <div className='pt-1' onClick={scrollToLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>

          <div  ref={scrollRef} className='flex overflow-x-auto items-center gap-4 ml-5 mr-5 scrollbar-hide  '>
              <Tags
                selectedTags={selectedTags}
                unselectedTags={unselectedTags}
                setSelectedTags={setSelectedTags}
                setUnselectedTags={setUnselectedTags}
                projectList={projectList}
                setProjectList={setProjectList}
                projects={props.projects}
              />
          </div>
          
          <div className='pt-1 ' onClick={scrollToRight}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>

        </div>

        
        <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  min-[320px]:grid-cols-1 justify-items-center  p-10 '>
          {projectList.map((project, i) =>
            <div key={i}
              className='rounded-lg flex flex-col  col-span-1 row-span-1 m-5  w-[250px] h-[200px]   '>

              <a target="_blank" rel="noopener noreferrer" href={project.link ?? ""}>
                <div className='rounded-full w-[250px] h-[200px] shadow-2xl overflow-hidden border-dashed border-2 border-sky-300 relative inset-0  '>
                  <Image
                    src={project.image ?? "/websites/mics.jpg"}
                    layout='fill'
                    objectFit='cover'
                    alt="Picture of the website or project"
                  />
                </div>
              </a>



              <div className='relative '>

                <div className=' text-slate-100 font-bold pl-3 bg-gradient-to-r from-slate-500 to-fuchsia-700 rounded-lg  border-2 border-sky-300   z-30 absolute bottom-0 left-0 w-[95%]' >
                  {project.name}
                </div>

                <a target="_blank" rel="noopener noreferrer" href={project.repo ?? ""}>
                  <div className=' bg-red-100 col-span-1 z-40 absolute  border-2 border-red-300  bottom-0 right-0 rounded-lg   ' >
                    <Image
                      src="/icons/github-mark.png"
                      width={25}
                      height={25}
                      alt=""
                    />
                  </div>
                </a>

              </div>

            </div>
          )}
        </div>
    </>);
} 