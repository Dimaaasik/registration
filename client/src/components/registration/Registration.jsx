import React from 'react';
import "./registration.css"
import Input from "../../utils/input/Input";

const Registration = () => {
    return (
        <div className= "registration">
            <div className= "registration__header">Регiстрацiя</div>
            <Input type="text" placeholder=""/>
            <Input type="text" placeholder=""/>
            <Input type="text" placeholder=""/>
            <Input type="text" placeholder=""/>
            <button className="registration__btn">Увiйти</button>
        </div>
    );
};

export default Registration;