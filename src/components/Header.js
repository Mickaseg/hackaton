import { NavLink } from "react-router-dom"

import "./Header.css"

const Header = () => {
    return(
    <div className="navbar">

            <NavLink to="/" className="navbar-logo">
              <img src="../Assets/new_logo.png" alt="logo" className="nav-logo" />
            </NavLink>


        <ul>
            <NavLink to="/" className="">
               <li className="navbar-home">Home</li> 
            </NavLink>
            <NavLink to="/Shop" className="">
                <li className="navbar-shop">Shop</li> 
            </NavLink>
            <NavLink to="/Choice" className="">
                <li className="navbar-choice">Enjoy</li> 
            </NavLink>
        </ul>

    </div>
    )}

export default Header