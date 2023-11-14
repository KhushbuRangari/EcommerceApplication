

import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'

import HomePage from './components/pages/HomePage';
import PageNotFound from './components/pages/PageNotFound';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/pages/user/Dashboard';
import PrivateRoute from './components/routes/PrivateRoute';
import AdminRoute from './components/routes/AdminRoute';
import AdminDashboard from './components/pages/Admin/AdminDashboard';
import CreateCategory from './components/pages/Admin/CreateCategory';
import CreateProduct from './components/pages/Admin/CreateProduct';
import User from './components/pages/Admin/User';
import Order from './components/pages/user/Order';
import Profile from './components/pages/user/Profile';

function App() {

  const [products, setProducts] = useState([]);
  const [captureSearch, setcaptureSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      // console.log(response.data,"Response");
      setProducts(response.data.products)
    }

    fetchData();
 //eslint-disable-next-line
  }, [])


  return (
    <>


      <Routes>
        <Route path='/' element={<HomePage />} />


        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Order />} />
        </Route>

  
      
        <Route path='/dashboard' element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={ <User/>} />
        </Route>


        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Products />} />
     
        <Route path='*' element={<PageNotFound />} />

      </Routes>




      {/* <Header products={products} setcaptureSearch={setcaptureSearch} />

      

      <Main products={products} captureSearch={captureSearch} />
   
      <Footer /> */}

    </>

  );
}

export default App;
