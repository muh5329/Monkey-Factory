
import Image from 'next/image'
export default function ProjectsPage
  () {

  const projects = [
    {
      "name": "project1",
      "image": "",
      "link": "",
      "repo": "",
      "tags": []
    },
    {
      "name": "project1",
      "image": "",
      "link": "",
      "repo": "",
      "tags": []
    }, {
      "name": "project1",
      "image": "",
      "link": "",
      "repo": "",
      "tags": []
    }, {
      "name": "project1",
      "image": "",
      "link": "",
      "repo": "",
      "tags": []
    }, {
      "name": "project1",
      "image": "",
      "link": "",
      "repo": "",
      "tags": []
    }, {
      "name": "project1",
      "image": "",
      "link": "",
      "repo": "",
      "tags": []
    },

  ];

  const tags = ["All", "threejs/Webgl", "design", "web"];
  return (
    <main className=" h-dvh bg-yellow-500">
      <div className='flex items-center justify-center  gap-4 p-10'>
        {tags.map((tag) =>
          <div className='bg-gray-50 rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center '>
            {tag}
          </div>
        )}

      </div>
      <div className='grid grid-cols-4 justify-items-center gap-7 p-10'>
        {projects.map((project) =>
          <div className='rounded-lg col-span-1 row-span-1 bg-gray-50 w-[300px] h-[250px]'>
            {project.name}
          </div>
        )}
      </div>


    </main>
  );
}
