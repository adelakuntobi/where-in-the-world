import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar(props) {
  const {toggle, handler} = props

  const changeState = () => {
    if (toggle === false) {
      handler(true)
      
    } else {
      handler(false)
    }
  }
  return (
    <div className={toggle ? "text-white box-shadow-dark dark-nav sticky top-0 w-full": "bg-white box-shadow sticky w-full top-0"}>
      <nav 
      className="flex flex-row justify-between items-center container mx-auto px-4 py-5">
        <h1 className="text-xl md:text-3xl font-black">Where in the world?</h1>
        <p className="cursor-pointer text-sm md:text-base" onClick={changeState}>
        <FontAwesomeIcon className="mx-1" icon={[toggle ? "fas" : "far", "moon"]} />
          {toggle ? "Light Mode" : "Dark Mode" }
        </p>
      </nav>
      {/* <ul className="flex flex-row items-center justify-evenly">
        <li><NavLink to="/main">Main page</NavLink></li>
        <li><NavLink to="/details">About</NavLink></li>
      </ul> */}
    </div>
  )
}

export default Navbar
