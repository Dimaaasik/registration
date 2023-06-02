import React from "react";
import Navbar from "./navbar/Navbar";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import './app.css'
import {useSelector} from "react-redux";
import Game from "./gamequiz/Game";
import Standart from "./standart/Standart";
import Admin from "./admin/Admin";



function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    let email = useSelector(state => state.user.email)
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
                {isAuth && email === "qwerty@mail.com" && <Game/>}
                {isAuth && email !== "qwerty@mail.com" && email !== "admin@mail.ua" && <Standart/>}
                {isAuth && email === "admin@mail.ua" && <Admin/>}
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
