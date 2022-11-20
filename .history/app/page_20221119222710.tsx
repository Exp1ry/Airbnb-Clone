import React from "react"
import Banner from "./Banner"
import Explore from "./Explore"
import Live from "./Live"

const page = () => {
  return (
    <main>
      <section>
        <Banner />
      </section>
      <section>
        <Explore />
      </section>
      <section>
        <Live />
      </section>
    </main>
  )
}

export default page
