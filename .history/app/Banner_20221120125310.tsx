import React from "react"
import Image from "next/image"
const Banner = () => {
  return (
    <>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image src="/bg.jpg" objectFit="cover" layout="fill" alt="idk"></Image>
        <div className="absolute top-1/2 w-full text-center text-white">
          <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl mx-auto">
            Visit your dream location
          </p>
          <button className="bg-white text-red-300 py-3 px-6 font-extrabold rounded-full text-lg mt-4 shadow-md  hover:shadow-xl active:scale-90 transition duration-150 ">
            Show me
          </button>
        </div>
      </div>
    </>
  )
}

export default Banner
