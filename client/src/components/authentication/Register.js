import React, { useState } from 'react'
import Layout from '../layouts/Layout'

import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../styles/authStyles.css';



export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  let config = {
    headers: {
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjdmMTRhNmM5OWQ3ODZhMzA3MzdkZCIsImlhdCI6MTY5NzExNjQ5MCwiZXhwIjoxNjk3MjAyODkwfQ.9_95V5kE9iupfYhAehc-O3kVOZNmygFuKfLo_OCj1Wo'
    }
  }

  //form Function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API}auth/register`, { username, email, password })

      // console.log(response.data);
      if (!response) {
        toast.error("Something wrong while registering")
      } else {
        toast.success('Success')
        navigate('./login')
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  }
  return (
    <Layout>
      <div className="register-bg">
        <div className="form-container">
          <div className="register">

            <form onSubmit={handleSubmit}>
              <div className='title'>Register Now</div>
              <div className="mb-3">

                <input type="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="form-control"
                  id="exampleInputUsername" placeholder='Enter username' required />
              </div>
              <div className="mb-3">

                <input type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="form-control" id="exampleInputEmail" placeholder='Enter Email' required />
              </div>
              <div className="mb-3">

                <input type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)} className="form-control"
                  id="exampleInputPassword1" placeholder='Enter Password' required />
              </div>

              <button type="submit" className="btn btn-primary ">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </Layout>
  )
}
