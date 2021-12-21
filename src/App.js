import { Routes, Route } from "react-router-dom"


import Welcome from "./screen/Welcome";
import Characters from "./screen/Shop";
import Choice from "./screen/Choice";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screen/Home";


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      	<Route path="/Welcome" element={<Welcome />} />
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Characters />} />
        <Route path="/Choice" element={<Choice />} />
      </Routes>   
      <Footer />
    </div>
  );
}

export default App;
