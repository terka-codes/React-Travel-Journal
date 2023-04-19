import React from "react"
import planetIcon from "/public/planet-icon.png"

const Header = () => {
  return (
    <nav className="header">
        <img src={planetIcon} alt="logo" />
        <h1>my travel journal.</h1>
    </nav>
  )
}

export default Header