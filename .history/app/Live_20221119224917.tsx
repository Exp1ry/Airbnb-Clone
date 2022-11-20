import React from "react"
import SecondCard from "./SecondCard"

const Live = () => {
  return (
    <>
      <h1 className="font-semibold pb-5 text-2xl sm:text-3xl md:text-4xl text-red-400 float-right">
        Pick your destination
      </h1>
      <div className="flex mt-3 md:mt-8">
        <SecondCard />
      </div>
    </>
  )
}

export default Live
