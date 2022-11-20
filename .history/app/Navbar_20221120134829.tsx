"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
//@ts-ignore
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/outline"
const Navbar = () => {
  const [search, setSearch] = useState("")
  function searchBarHandle() {}

  return (
    <>
      <header
        className="
    grid grid-cols-3 justify-between p-5 sticky shadow-md z-50 top-0 bg-white space-x-5"
      >
        <div className="block my-auto w-fit">
          <Image
            objectFit="contain"
            className="w-[9rem] "
            alt="idk"
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            height={50}
            width={150}
            layout="fixed"
          ></Image>
        </div>
        <div className="flex p-2 sm:border sm:rounded-full sm:shadow-md h-[4rem]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Homes"
            className="outline-none lg:w-[30rem] md:w-[20rem]
            sm:w-[10rem] w-[5rem] text-xs text-center h-2/3 my-auto md:text-base"
          ></input>
          <button
            className="active:scale-110 transition transform duration-125 ease-out"
            onClick={searchBarHandle}
          >
            <Image
              objectFit="contain"
              src="/magnifying-glass.png"
              alt="idk"
              height={20}
              width={25}
              className=" lg:w-[2.5rem] md:w-[2.5rem] sm:w-[2.5rem] w-[2.5rem] my-auto bg-red-300 rounded-full pl-2 pr-2 pt-2 pb-2  ml-1 hidden sm:block md:block lg:block"
            ></Image>
          </button>
        </div>
        <div className="flex justify-end  space-x-4 items-center text-gray-500">
          <p className="hidden lg:inline">Become a host</p>
          <GlobeAltIcon className="h-6" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
        <h1>Test</h1>
      </header>
    </>
  )
}

export default Navbar
