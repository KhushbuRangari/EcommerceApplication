import React from 'react'
import Layout from '../layouts/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="row conatct text-center p-2 ">
        <div className="col-6"><img className='contact_image' src="./images/card2.jpg" alt="" /></div>
        <div className="contact-text col-6">
          <h1 className="bg-dark p-2 text-white text-center">Contact Us </h1>
          <p className='text-justify '>For any query and info of product feel free to call anytime we  are availble 24X7</p>
          <p className="mt-3">
            <i className='fa fa-envelope'> : www.help@cityshop.com</i>
          </p>
          <p><i className='fa fa-phone'></i> : Call On 88889999000 </p>

        </div>
      </div>
    </Layout>
  )
}
