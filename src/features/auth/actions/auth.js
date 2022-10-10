import { api } from "../../../config";
import {BASE_URL}  from "../../../../env"

export const singUp =  async(data)=>{
    try{
        const response = await api.post("/singup/",data)
        console.log(response)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
export const login = async (data)=>{
    try{
        const response = await api.post("/authentification/",data)
        return response.data
    }catch(err){
        console.log(BASE_URL)
    }
}
