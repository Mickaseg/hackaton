import { Link } from "react-router-dom"
import Card from "../components/Card"
import Identif from "../components/Identif"
import logo from "../Assets/new_logo.png"
import "./Choice.css"

const Choice =() => {
    
    return (
    <div className="choicechoice">
        <img src={logo} alt="logo" className="logo logoshop"></img>
        
        <Identif />
    
    </div>
    
    )}
export default Choice