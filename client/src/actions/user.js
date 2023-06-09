import axios from "axios";
import {setUser} from "../reducers/userReducer";


export const registration = async (email, password, department, departmentCode) => {
    try{
        const response = await axios.post(`http://localhost:5000/api/auth/registration`,{
            email,
            password,
            department,
            departmentCode
        })
        alert(response.data.message)
    } catch (error){
        alert(error.response.data.message)
    }
}

export const login = (email, password) => {
    return async dispatch =>{
        try{
            const response = await axios.post(`http://localhost:5000/api/auth/login`,{
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (error){
            alert(error.response.data.message)
        }
    }
}
