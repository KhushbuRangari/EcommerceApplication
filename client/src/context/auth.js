import { useState,useContext,createContext, useEffect } from "react";
import axios from 'axios';
const AuthContext = createContext();


const AuthProvider = ({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:''
    });


//default axios
axios.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`


    useEffect(()=>{
        const data= localStorage.getItem('auth');
        if(data){
          
            const parseData = JSON.parse(data);
            // console.log(parseData.user,"data");
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token
            })
        }
        //eslint-disable-next-line
    },[])
    return (
        <AuthContext.Provider value= {[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

//Custome Hook
const useAuth =()=>useContext(AuthContext)

export {useAuth,AuthProvider};  


