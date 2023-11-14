import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
          <div className="col-12 " id="backToTop">
               <a href="/">Back to Top</a>
            </div>
        <h6 className='text-center'>
            All Right Reserved &copy; CITYSHOP </h6>
            <p className="textcenter mt-3">

                <Link to='/about'>
                    About
                </Link>

                <Link to='/Contact'>
                    Contact
                </Link>
            </p>
       
    </div>
  ) 
}

export default Footer