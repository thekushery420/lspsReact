import React, { useState } from "react"
import {Link} from "react-router-dom"
import lspsLogo from "../../Assets/lspsLogo.jpg"
import {MenuItems} from "./MenuItems"

import "./Header.css"

const Header = () =>{
    const[clicked, setClicked] = useState(false)


    const handleClick = () =>{
        setClicked(prevState => !prevState)
    }


    return(
    <nav className="NavbarItems" position="fixed">
        <h2 className="navbar-logo"> 
        <img src={lspsLogo} alt="Company Logo" /> 
        </h2>
        <div onClick={() => handleClick()} className="menu-icon">
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map(item =>{
                return(
                <li key={item.id}>
                    <Link to={item.url} className={item.cName}>
                        {item.name}
                    </Link> 
                 </li>
                )
            })}
        </ul>
    </nav>
   )
}

export default Header