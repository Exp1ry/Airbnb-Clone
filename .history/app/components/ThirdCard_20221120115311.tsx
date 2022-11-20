import Image from "next/image"
import React from "react"
import { Props } from "../../typings"
const ThirdCard = ({ img, title, description, buttonText }: Props) => {
  return (
    <div>
      <Image src={img} layout="fill" objectFit="cover" alt="idk"></Image>

      <div></div>
    </div>
  )
}

export default ThirdCard
