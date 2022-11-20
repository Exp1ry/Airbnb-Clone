import Image from "next/image"
import React from "react"
import { Props } from "../../typings"
const ThirdCard = ({ img, title, description, buttonText }: Props) => {
  return (
    <div className="relative h-96 min-w-[300px] p-10">
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        alt="idk"
        className=" rounded-2xl"
      ></Image>

      <div></div>
    </div>
  )
}

export default ThirdCard
