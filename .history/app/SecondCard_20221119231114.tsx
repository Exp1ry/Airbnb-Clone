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
            <div className="p-3 ">
              <img src={img} alt="idk" className=""></img>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default SecondCard
