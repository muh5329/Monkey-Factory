'use client'

import Image from 'next/image'
import { useMemo, useState , useEffect} from 'react';

export default function ProjectsPage() {


  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/trpc');
      const result = await response.json();
      setData(result.data);
    };

    fetchData();
  }, []);


  interface Project {
    name: string;
    image: string;
    link: string;
    repo: string;
    tags: string[];
  }

  const generateTopTags = (projects: Array<Project>): Array<string> => {
    return [... new Set(projects.flatMap((m) => m.tags))];
  }

  function intersection<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(value => arr2.includes(value));
  }

  const filterBySelectedTags = (projects: Array<Project>, selectedTags: string[]): Array<Project> => {
    if (selectedTags.length > 0) {
      return projects.filter((item) => intersection(item.tags, selectedTags).length > 0)
    } else {
      return projects;
    }
  }


  const projects: Array<Project> = [
    {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": ["webgl"]
    },
    {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": ["test"]
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": ["math"]
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": ["webgl", "design"]
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": ["random", "c"]
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": []
    },
  ];



  const tags: Array<string> = useMemo(
    () => generateTopTags(projects),
    [projects]
  );

  var [selectedTags, setSelectedTags] = useState<string[]>([]);
  var [unselectedTags, setUnselectedTags] = useState<string[]>(tags);

  var [projectList, setProjectList] = useState<Array<Project>>(projects);

  const selectTag = (tag: string) => {
    setSelectedTags([...selectedTags, tag]);
    const updatedItems = unselectedTags.filter(item => item !== tag);
    setUnselectedTags(updatedItems);
    setProjectList(filterBySelectedTags(projects, [...selectedTags, tag]));
  }

  const unselectTag = (tag: string) => {
    setUnselectedTags([...unselectedTags, tag]);
    const updatedItems = selectedTags.filter(item => item !== tag);
    setSelectedTags(updatedItems);
    setProjectList(filterBySelectedTags(projects, updatedItems));
  }



  return (
    <main className=" min-h-screen bg-yellow-500">
      <div className='flex items-center justify-center gap-4 p-10'>

        {selectedTags.length > 0 &&
          <div className="bg-slate-200  rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center">
            All
          </div>
        }

        {selectedTags.length <= 0 &&
          <div className="bg-slate-500  rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center" >
            All
          </div>
        }


        {selectedTags.map((tag, i) =>
          <div key={i} className="bg-slate-500  rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center" onClick={() => unselectTag(tag)}>
            {tag}
          </div>
        )}
        {unselectedTags.map((tag, i) =>
          <div key={i} className="bg-slate-200  rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center" onClick={() => selectTag(tag)} >
            {tag}
          </div>
        )}

      </div>
      <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  min-[320px]:grid-cols-1 justify-items-center  p-10'>
        {projectList.map((project, i) =>
          <div key={i}
            className='rounded-lg flex flex-col  col-span-1 row-span-1 m-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-[250px] h-[200px] '>

            <div className='rounded-full w-[250px] h-[200px] shadow-2xl overflow-hidden relative inset-0  '>
              <Image
                src={project.image}
                layout='fill'
                objectFit='cover'
                alt="Picture of the author"
              />
            </div>



            <div className='relative '>

              <div className=' text-slate-50 font-bold pl-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg z-30 absolute bottom-0 left-0 w-[95%]' >
                {project.name}
              </div>

              <a target="_blank" rel="noopener noreferrer" href={project.repo}>
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


    </main>
  );
}
