import Image from "next/image"
import React from "react"
import { Props } from "../../typings"
const ThirdCard = ({ img, title, description, buttonText }: Props) => {
  return (
    <section className="py-16 px-10">
      <div className="relative h-96 min-w-[300px] cursor-pointer">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt="idk"
          className=" rounded-2xl"
        ></Image>

        <div className="absolute">
          <h3>{title}</h3>
          <p>{description}</p>
          <button>{buttonText}</button>
        </div>
      </div>
    </section>
  )
}

export default ThirdCard