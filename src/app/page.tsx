
import Image from 'next/image'
import { type } from 'os';


interface SlidingPage {
  pageNumber: string;
  optionalName?: string;
  mainImage: string;
  pageSubtitle: string;
  linkTitle: string;
}


const SlidingPage = (props: SlidingPage) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="">
        <div className=" pl-4 text-sm pt-4 ">
          {props.optionalName}
        </div>
      </div>

      <div className="flex pt-1">
        <div className="w-10 pt-4 pl-4  text-lg">
          {"[" + props.pageNumber + "]"}
        </div>

        <div className="justify-start pl-16 pt-6">

          <div className="shadow-lg shadow-red-600">
            <Image
              src={props.mainImage}
              width={0}
              height={0}
              sizes="(max-width: 500px) 100vw, 33vw"
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
          </div>


        </div>

      </div>

      <div className="flex  pl-4 ">

        <div className="w-[75%] align-text-bottom text-[70px] sm:text-[90px] md:text-[120px] xl:text-[190px] md:text-[100px]">
          {props.pageSubtitle}
        </div>

        <div className="w-[30%] h-fit pt-40">

          {/* line of full width */}
          <div className="border border-zinc-900  " />

          {/* subtitle */}
          <div className="flex justify-between pt-2 ">

            <div className=" text-lg">
              {props.linkTitle}
            </div>

            <div className="">
              {"-->"}
            </div>

          </div>

        </div>

      </div>
    </div >
  );
}

export default function HomePage() {
  return (
    <main className=" bg-red-400 h-full pt-1 text-zinc-900 font-medium font-scopeone z-0">
      <SlidingPage
        optionalName="Muneeb Haq"
        pageNumber="01"
        mainImage="/rooms/room_1.jpg"
        pageSubtitle="About Me"
        linkTitle="More About Me"
      />
    </main>
  );
} 
