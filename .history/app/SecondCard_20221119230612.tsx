import Image from "next/image"
import React from "react"
import { use } from "react"
import { Data_2 } from "../typings"
const SecondCard = () => {
  function fetchData() {
    const data = fetch("https://www.jsonkeeper.com/b/VHHT").then((res) =>
      res.json()
    )

    return data
  }
  const data = use(fetchData())

  return (
    <>
      <h1 className="font-semibold pb-5 text-2xl sm:text-3xl md:text-4xl text-red-400 pt-6 max-w-7xl mx-auto px-8 sm:px-16 ">
        Pick your destination
      </h1>
      <div className="flex space-x-8  ">
        {data.map(({ img, title }: Data_2) => (
          <>
            <Image src={img} alt="idk" layout="fill"></Image>
          </>
        ))}
      </div>
    </>
  )
}

export default SecondCard
