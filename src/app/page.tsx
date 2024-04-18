import Link from "next/link";

import Image from 'next/image'
const blocks = [
  {
    "title": "Wave Collapse Editor",
    "image": "/websites/WaveTransformCollapse.gif",
    "description": " Wave Transform collapse editor",
    "url": "https://main.d3rbvqutrpbvur.amplifyapp.com/",
    "gh": "https://github.com/muh5329/WaveCollapseEditor"
  }, {
    "title": "Space Portfolio",
    "image": "/websites/animatedSpacePortfolio.gif",
    "description": "3D planet with a controllable spaceship",
    "url": "https://main.d15nu8mrhnpxou.amplifyapp.com",
    "gh": "https://github.com/muh5329/SpacePortfolio"
  }, {
    "title": "title",
    "image": "/icons/git-lnk.png",
    "description": " a little site thats magic",
    "url": "www.google.com",
    "gh": "https://github.com/muh5329/WaveCollapseEditor"
  },
];

export default function HomePage() {
  return (
    <main className="">
      <div className=" text-4xl">Site in Construction....</div>
      <div className="  grid gap-4 grid-cols-3 grid-rows-3">
        {blocks.map((block, index) => (
          <div className="border rounded-lg" key={index}>
            <a href={block.url}>
              <Image
                src={block.image}
                width={300}
                style={{ objectFit: "cover" }}
                height={200}
                alt="LinkedIn Logo"
                key={index + "img"}
              />
            </a>

            <div className="grid grid-cols-2 grid-rows-1" key={index + "inner"}>
              <div className="text-lg font-bold"> {block.title}</div>
              <a href={block.gh}>
                <Image
                  src="/icons/git-lnk.png"
                  width={25}
                  height={25}
                  alt="LinkedIn Logo"
                  key={index + "sourceIcon"}
                />
              </a>

              <div className="text-gray-50 text-sm ">
                {block.description}
              </div>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
