import React from "react"
import Image from "next/image"
const Outdoors = () => {
  return (
    <div className="mt-5">
      <Image
        src="/art.jpg"
        alt="idk"
        className="rounded-2xl mx-auto"
        height={400}
        width={800}
      ></Image>
    </div>
  )
}

export default Outdoors