import Link from "next/link";

import Image from 'next/image'


export default function HomePage() {
  return (
    <main className=" bg-red-400 h-full pt-1 text-zinc-900 font-medium font-scopeone">

      <div className="justify-start pl-4 text-lg pt-4 ">
        <div>
          Muneeb Haq
        </div>
      </div>

      <div className="flex pt-1">
        <div className="w-10 p-5 text-lg">
          [01]
        </div>

        <div className="w-[75%] pl-10">
          <div className="text-[200px]">
            Big Text
          </div>

        </div>
      </div>

      <div className="flex  pl-4 ">

        <div className="text-[190px] w-[75%] align-text-bottom">
          About Me
        </div>

        <div className="w-[23%] h-fit pt-40">

          {/* line of full width */}
          <div className="border border-zinc-900" />

          {/* subtitle */}
          <div className="flex justify-between pt-2 ">

            <div className=" text-lg">
              Learn more about me
            </div>

            <div className="">
              {"-->"}
            </div>

          </div>

        </div>

      </div>
    </main>
  );
} 
