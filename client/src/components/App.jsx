import React from "react";
import Navbar from "./navbar/Navbar";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import './app.css'
import {useSelector} from "react-redux";
import Game from "./gamequiz/Game";


function App() {
    const isAuth = useSelector(state => state.user.isAuth)
  return (
      <BrowserRouter>
        <div className= "app">
            <Navbar/>
            <div className="wrap">
                {!isAuth &&
                    <Routes>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>}
                {isAuth &&
                <Game/>}
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
