import React from "react"
import Image from "next/image"
const Outdoors = () => {
  return (
    <div className="">
      <Image
        src="/art.jpg"
        alt="idk"
        className="rounded-2xl"
        height={400}
        width={400}
        layout="responsive"
      ></Image>
    </div>
  )
}

export default Outdoors