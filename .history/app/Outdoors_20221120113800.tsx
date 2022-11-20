import React from "react"
import Image from "next/image"
const Outdoors = () => {
  return (
    <div>
      <Image
        src="/art.jpg"
        alt="idk"
        className="h-5 w-full"
        objectFit="cover"
      ></Image>
    </div>
  )
}

export default Outdoors
