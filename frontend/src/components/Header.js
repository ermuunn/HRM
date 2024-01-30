import React from "react"
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header>
      <div className="title">
        <img src={logo} alt="CSC"/>
        <h1>Төрийн албаны зөвлөл</h1>
        <a href="https://hrm.csc.gov.mn/">Хүний нөөц</a>
      </div>
    </header>
  )
}

export default Header;