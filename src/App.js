import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Drobdown from "./components/Drobdown";
import Menu from "./components/Menu";
import About from "./components/About";
function App() {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen) 
  }
  return (
   <>
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<><NavBar toggle= {toggle}/> <Drobdown isOpen={isOpen} toggle= {toggle} />  <Hero/><Content /> <Footer/></> }   />
        <Route path="/content" exact element={<><NavBar /> <Content /> <Footer/></>} />
        <Route path="/menu" exact element={<><NavBar /> <Menu /> <Footer/></>} />
        <Route path="/about" exact element={<><NavBar /> <About /> <Footer/></>} />
      </Routes>
    </Router>
       </div>
   </> 
  )
}


export default App;
