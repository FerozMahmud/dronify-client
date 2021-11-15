import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-dark text-white pt-2">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Dronify
                                </h6>
                                <p>
                                    Dronify is the world largest UAV dealer and we are DJI's largest and most experienced authorized service center in the Bangladesh.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Drone-1</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Drone-2</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Drone-3</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Drone-4</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Menubar
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Products</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Latest Offer</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> 99/1 Gulshan, Dhaka-1200, BD</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    contact@dronify.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> +88 01788 888 888</p>
                                <p><i className="fas fa-print me-3"></i> +88 01877 777 777</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="copyright text-center">
                    <p>Copyright © 2021 |<strong className="text-reset fw-bold" href="https://mdbootstrap.com/"> Dronify</strong></p>
                    <p><small>Made by <strong className='text-primary'>Feroz Mahmud</strong></small></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;