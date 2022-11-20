import React from "react"
import Image from "next/image"
const Outdoors = () => {
  return (
    <div className="w-[100px]">
      <Image
        src="/art.jpg"
        alt="idk"
        className=" w-1/2"
        objectFit="cover"
        layout="fill"
      ></Image>
    </div>
  )
}

export default Outdoors
