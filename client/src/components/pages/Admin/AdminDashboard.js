import React from 'react'
import Layout from '../../layouts/Layout'
import AdminMenu from '../../layouts/AdminMenu'
import { useAuth } from '../../../context/auth'

export default function AdminDashboard() {
  const [auth ]=useAuth();
  return (
    <Layout>
      
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-3">
            <AdminMenu/>
          </div>
          <div className="col-md-9 ">
           <div className="card w-75 p-3">
           <h3>Admin Name : {auth?.user[0].username}</h3>
           <h3>Admin Email : {auth?.user[0].email}</h3>
          
           </div>
          </div>
        </div>
      </div>
  
    </Layout>
  )
}
