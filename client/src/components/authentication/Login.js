import React, { useState,useEffect } from 'react'
import Layout from '../layouts/Layout'
    import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../styles/authStyles.css';
import { useAuth } from '../../context/auth';


export default function Login() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    let config = {
        headers: {
            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjdmMTRhNmM5OWQ3ODZhMzA3MzdkZCIsImlhdCI6MTY5NzExNjQ5MCwiZXhwIjoxNjk3MjAyODkwfQ.9_95V5kE9iupfYhAehc-O3kVOZNmygFuKfLo_OCj1Wo'
        }
    }

    //form Function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_API}auth/login`, { username, email, password })

           console.log(response ,'Login response');
            if (!response) {
                toast.error("Something wrong while registering")
            } else {
               
                
                setAuth(
                    {
                        ...auth,
                        user: response.data.user,
                        token:response.data.token
                    }
                )
                localStorage.setItem('auth',JSON.stringify(response.data))
                navigate(location.state||'/')
               
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }

    function onChangeValue(event) {
        setLogin(event.target.value);
        // console.log(event.target.value);
    }
    useEffect(()=>{
        const data= localStorage.getItem('auth');
        if(data){
            const parseData =JSON.parse(data);
            setAuth({
                ...auth, 
                user:parseData.user,
                token:parseData.token
            });
        }
         //eslint-disable-next-line
    },[])
    return (
        <Layout>
            <div className="login-bg my-3 mb-3">
                <div className="form-container">
                    <div className="login">

                        <form onSubmit={handleSubmit}>
                            <div className='title'>Login Now</div>
                            {/* <div className='form-radio ' onChange={onChangeValue}>
                                <input type="radio" value="username" name="login" checked={login === "Username"} /> Username
                                <input type="radio" value="email" name="login" checked={login === "Email"} style={{ marginLeft: '15px' }} /> Email
                            </div> */}
                            {/* {
                                login == 'username' ? <div className="mb-3">

                                    <input type="email"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
                                        className="form-control "
                                        id="exampleInputUsername" placeholder='Enter username' required />
                                </div> :
                                    <div className="mb-3">

                                        <input type="email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            className="form-control" id="exampleInputEmail" placeholder='Enter Email' required />
                                    </div>
                            } */}

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
