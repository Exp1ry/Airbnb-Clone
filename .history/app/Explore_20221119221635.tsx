import React from "react"
import { use } from "react"
import { Data } from "../typings"
import FirstCard from "./FirstCard"

const Explore = () => {
  function fetchData() {
    const data = fetch("https://www.jsonkeeper.com/b/4G1G").then((res) =>
      res.json()
    )
    return data
  }
  const data = use(fetchData())

  return (
    <>
      <div className="pt-6 max-w-7xl mx-auto px-8 sm:px-16">
        <h1 className="font-semibold pb-5 text-2xl sm:text-3xl md:text-4xl text-red-400">
          Explore Nearby
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4  mt-3 md:mt-8">
          {data.map((i: Data) => (
            //@ts-ignore
            <FirstCard data={data} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Explore
