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
    <div className="flex space-x-8 justify-center ">
      {data.map(({ img, title }: Data_2) => (
        <div
          key={img}
          className="relative h-80 w-80 cursor-pointer hover:scale-105 transform ransition duration-300 ease-out "
        >
          <Image alt="ix" layout="fill" src={img} className=""></Image>
          <h1>{title}</h1>
        </div>
      ))}
    </div>
  )
}

export default SecondCard
