import React from "react"
import Image from "next/image"
const Outdoors = () => {
  return (
    <div>
      <Image
        src="/art.jpg"
        alt="idk"
        className="h-5 w-1/2"
        objectFit="cover"
        layout="fill"
      ></Image>
    </div>
  )
}

export default Outdoors
