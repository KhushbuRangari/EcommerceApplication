import React from 'react'
import './Header.css';
import Carousel from './Carousel';
import { useState } from 'react';


export default function Header({ products,setcaptureSearch }) {

    const [filterList, setFilterList] = useState(products);

    function handleSearch(event) {

        // console.log(event.target.value);

        setcaptureSearch(event.target.value);
    }
    return (
        <>
            <header className="header">
                <a className="visually-hidden-focusable" name="top" href="#content"> </a>
                <nav className="navbar navbar-expand-lg " id="nav">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="/">
                            <img src="images/logo.png" alt="Logo" width="80px" height="80px" className="d-inline-block align-text-top" /></a>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" ></span>

                        </button>


                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                {/* 
                                <li>
                                      <a>Logo</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/" onClick="fetchproducts()">Products</a>
                                </li>

                                <li className="nav-item dropdown">

                                    <select className="custom-select" id="inputGroupSelect01" onChange="selectOption()" >

                                        <option selected="selected" className="dropdown-item" value="choose...">Categories</option>

                                    </select>
                                </li>
                            </ul>
                        </div>


                        <form className="d-flex">
                            <input className="form-control me-2" id="searchInput" onChange={handleSearch} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn" id="btn-search" type="submit" >Search</button>


                            <button className="btn  ms-2 " id="cart-btn" type="button">
                                <i className="fa fa-shopping-cart" >Cart</i>
                            </button>

                        </form>
                    </div>
                </nav>

                <Carousel />
                <div className="shopping-cart">
                    <div className="box">

                        <div className="content">

                        </div>
                    </div>



                    <a href="/" className="btn">Checkout</a>
                </div>
            </header>

        </>
    )
}
