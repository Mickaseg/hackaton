import { Routes, Route } from "react-router-dom"

import Header from "./components/Header";
import Home from "./screen/Home";
import Page2 from "./screen/Page2";
import Page3 from "./screen/Page3";
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
	      <Route path="/" element={<Home />} />
      	<Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>    
    </div>
  );
}

export default App;
