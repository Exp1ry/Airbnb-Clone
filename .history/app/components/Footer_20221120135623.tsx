import React from "react"

const Footer = () => {
  return (
    <div className="grid grid-cols-1 text-center md:grid-cols-5 mt-5 bg-gray-100 px-32 py-14 text-gray-600 gap-5 divide-y-2 md:divide-x-2 md:divide-y-0 ">
      <div className="hidden md:inline space-y-4 text-xs text-gray-800 mt-4">
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
      <div className="space-y-4 text-xs text-gray-800 mt-4">
        <h5 className="font-bold">ABOUT</h5>
        <p>How ZaidBNB works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>ZaidBNB Plus</p>
        <p>ZaidBNB Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 mt-4">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Visit my website</p>
        <p>Policies</p>
        <p>Zaid Widyan</p>
        <p>Test Data</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 mt-4">
        <h5 className="font-bold">HOST</h5>
        <p>Zaid Widyan</p>
        <p>Personal Project</p>
        <p>AirBnb mirror</p>
        <p>Contact me</p>
        <p>To build your projects</p>
      </div>
    </div>
  )
}

export default Footer
