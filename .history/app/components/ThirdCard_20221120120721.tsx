import Image from "next/image"
import React from "react"
import { Props } from "../../typings"
const ThirdCard = ({ img, title, description, buttonText }: Props) => {
  return (
    <section className="py-16 px-10">
      <div className="relative h-96 min-w-[300px] cursor-pointer lg:max-w-[1200px] xl:max-w-[2000px] mx-auto">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt="idk"
          className=" rounded-2xl"
        ></Image>

        <div className="absolute top-28 left-12">
          <h3 className="text-4xl mb-3 w-64">{title}</h3>
          <p>{description}</p>
          <button className="text-sm mt-3 bg-black text-white p-2 rounded-full">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ThirdCard
