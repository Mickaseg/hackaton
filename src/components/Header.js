import { NavLink } from "react-router-dom"

import "./Header.css"

const Header = () => {
    return(
    <div className="navbar">
        <div className="logo">
        <NavLink to="/" className="navbar-logo">
            LOGO
        </NavLink>
        </div>
        <div className="listMenu">
        <ul>
            <NavLink to="/" className="">
               <li className="navbar-home">HOME</li> 
            </NavLink>
            <NavLink to="/page2" className="">
                <li className="navbar-page2">PAGE 2</li> 
            </NavLink>
            <NavLink to="/page3" className="">
                <li className="navbar-page3">PAGE 3</li> 
            </NavLink>
       
        </ul>
        </div>
    </div>
    )}

export default Header