import Image from "next/image"
import React from "react"
import { Props } from "../../typings"
const ThirdCard = ({ img, title, description, buttonText }: Props) => {
  return (
    <div className="relative h-96 min-w-[300px]">
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        alt="idk"
        className=" p-10"
      ></Image>

      <div></div>
    </div>
  )
}

export default ThirdCard