
import Image from 'next/image'
export default function ProjectsPage
  () {

  const projects = [
    {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": []
    },
    {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": []
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": []
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": []
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": []
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": []
    },

  ];

  const tags = ["All", "threejs/Webgl", "design", "web"];

  return (
    <main className=" min-h-screen bg-yellow-500">
      <div className='flex items-center justify-center gap-4 p-10'>
        {tags.map((tag, i) =>
          <div key={i} className='bg-gradient-to-r from-slate-200 to-slate-50 rounded-lg pt-1 pb-1 pl-2 pr-2 h-fit text-center '>
            {tag}
          </div>
        )}

      </div>
      <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  min-[320px]:grid-cols-1 justify-items-center  p-10'>
        {projects.map((project, i) =>
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
