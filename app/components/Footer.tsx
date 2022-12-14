import React from "react"

const Footer = () => {
  return (
    <>
      <div className="w-full md:hidden bg-red-400 p-1">
        <p className="text-center text-[13px] text-white">
          Copyrightâ’¸ Zaid Widyan
        </p>
      </div>
      <div className="grid grid-cols-1 text-center md:grid-cols-5 md:mt-5 bg-gray-100 px-5 md:px-32 md:py-14 text-gray-600 gap-5 md:divide-x-2 md:divide-y-0 ">
        <div className="hidden md:inline space-y-4 text-xs text-gray-800 mt-4 pb-2">
          <h5 className="font-bold">MAIN</h5>
          <p>How ZaidBNB works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>ZaidBNB Plus</p>
          <p>ZaidBNB Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 mt-4 hidden md:inline">
          <h5 className="font-bold">LINKS</h5>
          <p>Home</p>
          <p>Rent</p>
          <p>About</p>
          <p>Conduct</p>
          <p>Help</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 mt-4 hidden md:inline">
          <h5 className="font-bold">ABOUT</h5>
          <p>How ZaidBNB works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>ZaidBNB Plus</p>
          <p>ZaidBNB Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 mt-4 hidden md:inline">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>Visit my website</p>
          <p>Policies</p>
          <p>Zaid Widyan</p>
          <p>Test Data</p>
        </div>

        <div className=" text-xs text-gray-800 mt-1 md:mt-4 grid grid-cols-6 md:block md:space-y-4 pb-8">
          <h5 className="font-bold my-auto">HOST</h5>
          <p>ZW</p>
          <p>About</p>
          <p>Policy</p>
          <p>Contact</p>
          <p>Bye</p>
        </div>
      </div>
    </>
  )
}

export default Footer
