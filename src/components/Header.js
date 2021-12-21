import { NavLink } from "react-router-dom"

import "./Header.css"
import logo from "../Assets/new_logo.png";

const Header = () => {
    return(
    <div className="navbar">

            <NavLink to="/" className="navbar-logo">
              <img src={logo} alt="logo" className="nav-logo" />
            </NavLink>


        <ul>
            {/* J'ai ajoute welcome ici pour acceder a la page*/}
            <NavLink to="/Welcome" className="">
               <li className="navbar-welcome">*</li>  
            </NavLink>
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