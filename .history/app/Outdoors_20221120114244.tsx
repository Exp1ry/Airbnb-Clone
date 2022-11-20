import React from "react"
import Image from "next/image"
const Outdoors = () => {
  return (
    <div className="mx-auto text-center">
      <Image
        src="/art.jpg"
        alt="idk"
        className="rounded-2xl"
        height={400}
        width={400}
      ></Image>
    </div>
  )
}

export default Outdoors
