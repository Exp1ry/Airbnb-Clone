import React from "react"
import Image from "next/image"
const Outdoors = () => {
  return (
    <div className="w-[100px]">
      <Image
        src="/art.jpg"
        alt="idk"
        className="rounded-2xl"
        height={50}
        width={50}
      ></Image>
    </div>
  )
}

export default Outdoors
