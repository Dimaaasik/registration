import React, {useState} from 'react';
import "./registration.css"
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user"

const Registration = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [department, setDepartment] = useState()
    const [departmentCode, setDepartmentCode] = useState()
    return (
        <div className= "registration">
            <div className= "registration__header">Регiстрацiя</div>
            <Input value = {email} setValue = {setEmail} type="text" placeholder="email"/>
            <Input value = {password} setValue = {setPassword} type="password" placeholder="password"/>
            <Input value = {department} setValue = {setDepartment} type="text" placeholder="department"/>
            <Input value = {departmentCode} setValue = {setDepartmentCode} type="text" placeholder="department code"/>
            <button className="registration__btn" onClick={() => registration(email,password,department,departmentCode)}>Зареєструватися</button>
        </div>
    );
};

export default Registration;