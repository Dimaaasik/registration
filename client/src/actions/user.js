import axios from "axios";


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