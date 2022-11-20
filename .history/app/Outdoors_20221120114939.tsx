import React from "react"
import Image from "next/image"
import ThirdCard from "./components/ThirdCard"
const Outdoors = () => {
  return (
    <div className="mt-[50px] md:mt-[70px]">
      <ThirdCard
        img={"https://links.papareact.com/4cj"}
        title="The Greatest Outdoors"
        description="Wishlist curated by Airbnb"
        buttonText="Get Inspired"
      />
    </div>
  )
}

export default Outdoors
