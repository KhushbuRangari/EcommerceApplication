import React from 'react'
import Layout from '../../layouts/Layout'
import UserMenu from '../../layouts/UserMenu'
import { useAuth } from '../../../context/auth'

export default function Dashboard() {
    const [auth] =useAuth();
    return (
        <Layout title='Dashboard'>
            <div className="container-fluid p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu></UserMenu>
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75">
                            <h2> Username: {auth?.user[0].username}</h2>
                            <h2>Email: {auth?.user[0].email}</h2>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
