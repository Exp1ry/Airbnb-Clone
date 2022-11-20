import React from "react"
import Image from "next/image"
const Outdoors = () => {
  return (
    <div className="">
      <Image
        src="/art.jpg"
        alt="idk"
        className="rounded-2xl"
        height={200}
        width={200}
        layout="responsive"
      ></Image>
    </div>
  )
}

export default Outdoors
