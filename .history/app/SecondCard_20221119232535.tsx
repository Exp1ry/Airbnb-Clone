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
      <div className="flex ">
        {data.map(({ img, title }: Data_2) => (
          <>
            <div className="p-3 " key={Math.random()}>
              <h1 className="font-semibold pb-5 text-2xl sm:text-3xl md:text-4xl text-red-400">
                Test
              </h1>
              <img
                src={img}
                alt="idk"
                className="space-x-2 hover:scale-105 transform transition duration-300 ease-out rounded-2xl"
              ></img>
              <h1 className="  mt-4 font-semibold pb-5 text-base sm:text-lg md:text-2xl text-red-500">
                {title}
              </h1>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default SecondCard
