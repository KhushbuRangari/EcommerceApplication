import React from 'react'
export default function Carousel(){
    return (
        <div>

            <div className="container-fluid" id="carousel1" style={{ padding: 0 }}>
                <div className="row">

                    <div className="col" style={{ paddingLeft: 0 }}>
                        <div id="pCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row ">
                                        <div className="col">
                                            {/* <!-- <div className="card"> --> */}
                                            <img src="./images/banner1.jpg" id="bannerImg" alt="Project 1" />

                                            <div className="cityshopText">
                                                <img src="./images/cityShop text.png" style={{ width: "200px", height: "160px" }} alt="" />

                                                <ul className="social-icons" id="socialaLink">
                                                    <li> <a className="	fa fa-facebook " style={{ fontSize: '24px' }} href="/"> </a></li>
                                                    <li> <a className="fa fa-instagram" style={{ fontSize: "24px" }} href="/"> </a></li>
                                                </ul>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        <div className="col">
                                            <div className="card">
                                                <img src="./images/card1.jpg" className="card-img-top" alt="Project 4" />

                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <img src="./images/card2.jpg" className="card-img-top" alt="Project 5" />

                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <img src="./images/card1.jpg" className="card-img-top" alt="Project 6" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#pCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#pCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>



       
                
            </div>
        </div>
    )
}

