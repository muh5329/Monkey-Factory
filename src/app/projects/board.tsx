'use client'

import { Project } from "./page";
import { Dispatch, SetStateAction, useState } from 'react';
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
        <div className="bg-slate-200  rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center">
          All
        </div>
      }

      {props.selectedTags.length <= 0 &&
        <div className="bg-slate-500  rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center" >
          All
        </div>
      }


      {props.selectedTags.map((tag, i) =>
        <div key={i} className="bg-slate-500  rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center" onClick={() => unselectTag(tag)}>
          {tag}
        </div>
      )}
      {props.unselectedTags.map((tag, i) =>
        <div key={i} className="bg-slate-200  rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center" onClick={() => selectTag(tag)} >
          {tag}
        </div>
      )}

  </>);
}

  
export default function Board(props:Board) {
    const [selectedTags,setSelectedTags]  = useState<string[]>([]);
    const [unselectedTags, setUnselectedTags] = useState<string[]>(props.tags);
    const [projectList,setProjectList] = useState(props.projectList);

    return (<>
        <div className='flex items-center justify-center gap-4 p-10'>
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

        
        <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  min-[320px]:grid-cols-1 justify-items-center  p-10'>
          {projectList.map((project, i) =>
            <div key={i}
              className='rounded-lg flex flex-col  col-span-1 row-span-1 m-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-[250px] h-[200px] '>

              <a target="_blank" rel="noopener noreferrer" href={project.link ?? ""}>
                <div className='rounded-full w-[250px] h-[200px] shadow-2xl overflow-hidden relative inset-0  '>
                  <Image
                    src={project.image ?? ""}
                    layout='fill'
                    objectFit='cover'
                    alt="Picture of the website or project"
                  />
                </div>
              </a>



              <div className='relative '>

                <div className=' text-slate-50 font-bold pl-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg z-30 absolute bottom-0 left-0 w-[95%]' >
                  {project.name}
                </div>

                <a target="_blank" rel="noopener noreferrer" href={project.repo ?? ""}>
                  <div className=' bg-gradient-to-r from-purple-500 to-pink-500 col-span-1 z-40 absolute bottom-0 right-0 rounded-lg' >
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