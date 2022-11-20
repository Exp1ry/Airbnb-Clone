import React from "react"
import { Data } from "../typings"
import { use } from "react"

const FirstCard = () => {
  function fetchData() {
    const data = fetch("https://www.jsonkeeper.com/b/4G1G").then((res) =>
      res.json()
    )
    return data
  }
  const data = use(fetchData())
  return (
    <>
      {data.map((i: Data) => (
        <div className="text-center space-y-3 flex text-sm space-x-1 md:space-x-2.5 p-3  hover:shadow-lg cursor-pointer ">
          <img
            src={i.img}
            alt="img"
            className=" h-[3rem] md:h-[6rem] w-[3rem] h-p[rem] md:w-[6rem] lg:w-[6rem] rounded-xl my-auto "
          ></img>
          <div className="block">
            <p>{i.location}</p>
            <p className="text-gray-400">{i.distance}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default FirstCard
