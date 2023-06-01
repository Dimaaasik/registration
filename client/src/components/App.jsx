import React from "react";
import Navbar from "./navbar/Navbar";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Registration from "./registration/Registration";
import './app.css'

function App() {
  return (
      <BrowserRouter>
        <div className= "app">
            <Navbar/>
            <div className="wrap">
                <Routes>
                    <Route path="/registration" element={<Registration/>}/>
                </Routes>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
