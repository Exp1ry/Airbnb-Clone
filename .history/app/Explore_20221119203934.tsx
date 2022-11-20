import React from "react"
import { use } from "react"
import { Data } from "../typings"

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
      <div className="pt-6 max-w-7xl mx-auto px-8 sm:px-16 ">
        <h1 className="font-semibold pb-5 text-2xl sm:text-3xl md:text-4xl">
          Explore Nearby
        </h1>
        <div className="grid grid-cols-4 space-x-3 ">
          {data.map((i: Data) => (
            <div className="text-center space-y-2">
              <img
                src={i.img}
                alt="img"
                className="mx-auto w-[3rem] md:w-[6rem] lg:w-[8rem] rounded-xl"
              ></img>
              <p>{i.location}</p>
              <p>{i.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Explore
