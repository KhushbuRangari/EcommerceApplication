import React from 'react'
import Layout from '../layouts/Layout'

export default function About() {
  return (
<Layout>
      <div className="row about text-center p-2 ">
        <div className="col-6"><img className='about_image' src="./images/aboutUs.jpg" alt="" /></div>
        <div className="about-text col-6">
          <h1 className="bg-dark p-2 text-white text-center">About Us </h1>
          <p className='text-justify '>Welcome to CityShop, your ultimate online shopping destination! 
          We are dedicated to providing a seamless and secure shopping experience. Our wide range of 
          products, competitive prices, and swift delivery make us your ideal choice. At CityShop, 
          customer satisfaction is our priority, 
          and we're here to make your shopping delightful. Shop with us today!</p>

        </div>
      </div>
    </Layout>
  )
}
