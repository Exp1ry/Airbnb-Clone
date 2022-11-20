import React from "react"
import Banner from "./Banner"
import Explore from "./Explore"
import Live from "./Live"
import Outdoors from "./Outdoors"

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
      <section>
        <Outdoors />
      </section>
    </main>
  )
}

export default page
