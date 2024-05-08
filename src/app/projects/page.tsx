
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
    <main className=" h-fill bg-yellow-500">
      <div className='flex items-center justify-center gap-4 p-10'>
        {tags.map((tag, i) =>
          <div key={i} className='bg-gray-50 rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center '>
            {tag}
          </div>
        )}

      </div>
      <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  min-[320px]:grid-cols-1 justify-items-center  p-10'>
        {projects.map((project, i) =>
          <div key={i}
            className='rounded-lg flex flex-col  col-span-1 row-span-1 m-5 bg-gray-50 w-[250px] h-[200px] justify-between'>
            <div>
              {project.name}
            </div>


            <div className='relative '>

              <div className=' text-slate-50 font-bold pl-3 bg-red-600 rounded-lg z-30 absolute bottom-0 left-0 w-[90%]' >
                {project.name}
              </div>

              <div className=' bg-purple-300 col-span-1 z-40 absolute bottom-0 right-0 rounded-lg' >
                GH Link
              </div>

            </div>

          </div>
        )}
      </div>


    </main>
  );
}
