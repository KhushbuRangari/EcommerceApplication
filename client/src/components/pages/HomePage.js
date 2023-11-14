import React from 'react'
import Layout from '../layouts/Layout'
import { useAuth } from '../../context/auth'

export default function HomePage() {
  const [auth,setAuth]=useAuth();
  //  console.log(auth,"Home page Successfull");
  return (
    <Layout>
      <h1>HomePage</h1>
    <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}
