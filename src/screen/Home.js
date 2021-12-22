import "./Home.css"
import go from "../Assets/go.png";
import logo from "../Assets/new_logo.png";
import Square from "../components/Square";
import Square2 from "../components/Square2";

const Home =() => {
    return  <div className="homePAGE"> 
            
            <img src={logo} alt="logo" className="logo" />
            <h1 className="homeTitle"> THE INTERGALACTIC DATING </h1>
            <Square /> 
            <img src={go} alt="go" className="imggo"/>
            <Square2 />
            <div>
            
            </div>
            

       
        </div>
    
    }
export default Home
