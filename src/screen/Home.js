import "./Home.css"
import logo from "../Assets/new_logo.png";
import Square from "../components/Square";

const Home =() => {
    return  <div className="homePAGE"> 
            <img src={logo} alt="logo" className="nav-logo" />
            <h1 className="homeTitle"> THE INTERGALACTIC DATING </h1>
            <Square /> 
            <div className="homearticle1"><h2>Top 3 hottest products</h2></div>
            
        </div>
    
    }
export default Home
