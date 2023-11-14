import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../../context/auth'
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Spinner'; 


function AdminRoute() {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth();
  
    // console.log(auth,"private route");
    useEffect(() => {
      const authCheck = async () => {

       console.log(auth.user[0]._id,"-------------");
   
        const res = await axios.get('http://localhost:3004/auth/admin-auth')
  
        console.log(res,'private Ok');
        if (res.data.ok) {
          setOk(true)
        }
        else {
          setOk(false)
        }
    
      };

     
      if (auth?.token) authCheck();
    }, [auth?.token]);
    return (ok ? <Outlet /> : <Spinner />
  )
}

export default AdminRoute