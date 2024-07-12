import { GoArrowUpRight } from "react-icons/go";

export default function Hero() {
  return (
    <div className=" heroCustom  py-32 md:py-56 ">
      <div className="max-w-screen-xl  mx-auto  px-4   ">
        <div className="text-white text-center">
          <h1 className=" text-2xl md:text-6xl font-bold mb-8">
            Welcome to Panoptes Group
          </h1>
          <div className=" max-w-screen-md mx-auto text-sm md:text-lg">
            <p className="">
              At Panoptes Group, we transform data into actionable insights to
              drive your buss farward Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Debitis quibusdam architecto porro quisquam
              rerum voluptate, exercitationem rem id nisi modi. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Quo, ea?
            </p>
            <p className="mt-3 md:mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              cumque deserunt delectus corrupti rerum sequi. Lorem ipsum dolor
              sit amet consectetur.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <button className="flex gap-1 items-center bg-white text-[#0a0a72] font-semibold px-4 py-3 md:py-4 rounded-full hover:scale-105 duration-500 hover:bg-[#0a0a72] hover:text-white">
              Schedule a Discovery Session <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
