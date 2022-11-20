import React from "react"
import Image from "next/image"
const Outdoors = () => {
  return (
    <div className="">
      <Image
        src="/art.jpg"
        alt="idk"
        className="rounded-2xl"
        height={500}
        width={500}
        layout="responsive"
      ></Image>
    </div>
  )
}

export default Outdoors
