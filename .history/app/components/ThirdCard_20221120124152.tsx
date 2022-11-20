import Image from "next/image"
import React from "react"
import { Props } from "../../typings"
const ThirdCard = ({ img, title, description, buttonText }: Props) => {
  return (
    <section className="py-16 px-7 sm:px-14 md:px-40">
      <div className="mx-auto relative h-96 min-w-[300px] md:min-w-[600px] lg:max-w-[1200px] xl:max-w-[2000px] xl:h-[500px] ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt="idk"
          className=" rounded-2xl shadow-2xl"
        ></Image>

        <div className="absolute top-28 sm:top-36 left-12">
          <h1 className=" text-3xl md:text-4xl xl:text mb-3 w-64">{title}</h1>

          <button className="text-sm mt-3 bg-black text-white p-2 rounded-full active:scale-125 hover:shadow-2xl  transition transform ease-out">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ThirdCard
