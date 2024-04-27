
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
    <div className="flex flex-col justify-between h-dvh">
      <div className="">
        <div className=" pl-4 text-sm pt-4 ">
          {props.optionalName}
        </div>
      </div>

      <div className="flex pt-1 h-[75%]">
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

      <div className="flex justify-between pl-4 ">

        <div className="w-[75%] text-[70px] sm:text-[90px] md:text-[120px] xl:text-[190px] ">
          {props.pageSubtitle}
        </div>

        <div className="pr-10 grid grid-rows-2 grid-cols-1 gap-1 w-[25%] ">
          <div className=''></div>

          <div className=''>
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

      </div>
    </div >
  );
}

export default function HomePage() {
  return (
    <main className=" bg-red-400 pt-1 text-zinc-900 font-medium font-scopeone z-0 h-dvh">
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
