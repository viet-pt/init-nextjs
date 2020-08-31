import axios from './axios';
export const loginUser= (username,password)=>{
    return axios.post("/api/user/login",{
        username,password
    })
}