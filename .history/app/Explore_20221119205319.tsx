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
      <div className="pt-6 max-w-7xl mx-auto px-8 sm:px-16">
        <h1 className="font-semibold pb-5 text-2xl sm:text-3xl md:text-4xl">
          Explore Nearby
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4  ">
          {data.map((i: Data) => (
            <div className="text-center space-y-3 flex text-sm space-x-2 p-3 hover:shadow-lg cursor-pointer">
              <img
                src={i.img}
                alt="img"
                className="mx-auto h-[3rem] md:h-[6rem] w-[3rem] h-p[rem] md:w-[6rem] lg:w-[6rem] rounded-xl fixed"
              ></img>
              <div className="block 5">
                <p>{i.location}</p>
                <p className="text-gray-400">{i.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Explore