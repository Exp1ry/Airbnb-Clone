import React from "react"
import Image from "next/image"
const Outdoors = () => {
  return (
    <div className="mt-[50px] md:mt-[70px]">
      <Image
        src="/art.jpg"
        alt="idk"
        className="rounded-2xl mx-auto h-[100px]"
        height={0}
        width={800}
      ></Image>
    </div>
  )
}

export default Outdoors
