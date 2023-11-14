import React from 'react'

import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer navbar-fixed-bottom">
        <div className="container-fluid text-center ">
          <div className="row">
            <div className="col-12 " id="backToTop">
               <a href="/">Back to Top</a>
            </div>
          </div>
          <div className="row  ">
             <div className="col-6 my-5">
              <div className="col-6 text-white">
                <ul className="list-unstyled">
                  <li><a href="/" >Products</a></li>
                  <li><a href="/" >Benefits</a></li>
                  <li><a href="/" >Partners</a></li>
                  <li><a href="/" >Team</a></li>
                </ul>
              </div>
              <div className="col-6 text-white ">
                <ul className="list-unstyled ">
                  <li><a href="/" >Documentation</a></li>
                  <li><a href="/" >Support</a></li>
                  <li><a href="/" >Legal Terms</a></li>
                  <li><a href="/" >About</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md my-5">

              <br />
              <div className="col-md text-white" >
                <h5 >Need Help?</h5>
                <hr />
              </div>
              <div className="col-md text-white ">
                <form>
                  <fieldset className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                  </fieldset><br />
                  <fieldset className="form-group">
                    <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                  </fieldset>
                  <fieldset className="form-group text-xs-right" style={{ marginLeft: "10%" }}>
                    <button type="button" className="btn btn-light btn-lg">Send</button>
                  </fieldset>
                </form>
              </div>
              <div >
                <ul className="nav" >
                  <li className="nav-item "><a href="/" className="nav-link pl-0"><i className="fa fa-facebook fa-lg text-white"></i></a>
                  </li>
                  <li className="nav-item"><a href="/" className="nav-link"><i className="fa fa-twitter fa-lg text-white"></i></a></li>
                  <li className="nav-item"><a href="/" className="nav-link"><i className="fa fa-github fa-lg text-white"></i></a></li>
                  <li className="nav-item"><a href="/" className="nav-link"><i className="fa fa-instagram fa-lg text-white"></i></a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>






        <div className="row">
          <div className="col-md-12 text-white text-center my-3">
            <p>&copy; 2023 CityShop. All rights reserved.</p>
          </div>
        </div>

      </footer>

    </>
  )
}
