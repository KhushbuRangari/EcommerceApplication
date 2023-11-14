import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom'


export default function Spinner() {
    const [count,setCount]=useState(5)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{

        const interval = setInterval(()=>{
            setCount((prev)=>{
                return --prev
            })
        },1000)
        // console.log(location.pathname,"Location");
        count===0 && navigate('/login',{
            state:location.pathname
        });

        return ()=>clearInterval(interval);
    },[count,navigate,location])
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{height:'600px'}}>
                
                <h1 className='Text-center'>redirection you in {count} seconds </h1>
                <div className="spinner-border" role="status">

                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        </>
    )
}
