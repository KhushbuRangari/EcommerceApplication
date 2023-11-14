import React from 'react'
import Layout from '../../layouts/Layout'
import UserMenu from '../../layouts/UserMenu'

function Profile() {
    return (
        <Layout title='Your Profile'>
            <div className="container-fluid p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu></UserMenu>
                    </div>
                    <div className="col-md-9">
                            <h4>Your Profile</h4>
                    </div>
                </div>
            </div></Layout>
    )
}

export default Profile