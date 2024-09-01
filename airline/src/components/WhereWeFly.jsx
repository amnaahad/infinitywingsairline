import React from 'react';
import Fade from 'react-reveal/Fade';
import sharjah from '../assets/img/sharjah.webp';
import manchestor from '../assets/img/manchestor.jpg';
import toronto from '../assets/img/toronto.jpg';
import istanbul from '../assets/img/istanbul.jpg';
import paris from '../assets/img/paris.jpg';
import amsterdam from '../assets/img/amsterdam.jpg';

const ExploreTour = () => {
    return (
        <div className="container-fluid ExploreTour py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-1" style={{ maxWidth: '110%' }}>
                    <h3
                        className="section-title px-3"
                        style={{
                            fontSize: '32px',
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 'bold',
                            color: 'grey',
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Where We Fly?
                    </h3>
                </div>
            </div>

            <Fade bottom>
                <div className="tab-class text-center">
                    <div className="tab-content">
                        <div id="NationalTab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <Fade bottom cascade>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="national-item">
                                            <img src={sharjah} className="img-fluid w-100 rounded" alt="Tour" />
                                            <div className="national-content">
                                                <div className="national-info">
                                                    <h5 className="text-white text-uppercase mb-2">Sharjah</h5>
                                                </div>
                                            </div>
                                            <div className="national-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="national-item">
                                            <img src={manchestor} className="img-fluid w-100 rounded" alt="Tour" />
                                            <div className="national-content">
                                                <div className="national-info">
                                                    <h5 className="text-white text-uppercase mb-2">Manchestor</h5>
                                                </div>
                                            </div>
                                            <div className="national-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="national-item">
                                            <img src={toronto} className="img-fluid w-100 rounded" alt="Tour" />
                                            <div className="national-content">
                                                <div className="national-info">
                                                    <h5 className="text-white text-uppercase mb-2">Toronto</h5>
                                                </div>
                                            </div>
                                            <div className="national-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="national-item">
                                            <img src={istanbul} className="img-fluid w-100 rounded" alt="Tour" />
                                            <div className="national-content">
                                                <div className="national-info">
                                                    <h5 className="text-white text-uppercase mb-2">Istanbul</h5>
                                                </div>
                                            </div>
                                            <div className="national-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="national-item">
                                            <img src={amsterdam} className="img-fluid w-100 rounded" alt="Tour" />
                                            <div className="national-content">
                                                <div className="national-info">
                                                    <h5 className="text-white text-uppercase mb-2">Amsterdam</h5>
                                                </div>
                                            </div>
                                            <div className="national-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="national-item">
                                            <img src={paris} className="img-fluid w-100 rounded" alt="Tour" />
                                            <div className="national-content">
                                                <div className="national-info">
                                                    <h5 className="text-white text-uppercase mb-2">Paris</h5>
                                                </div>
                                            </div>
                                            <div className="national-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div id="InternationalTab-2" className="tab-pane fade show p-0">
                            <div className="InternationalTour-carousel owl-carousel">
                                <Fade bottom cascade>
                                    <div className="international-item">
                                        <img src="img/explore-tour-1.jpg" className="img-fluid w-100 rounded" alt="Tour" />
                                        <div className="international-content">
                                            <div className="international-info">
                                                <h5 className="text-white text-uppercase mb-2">Australia</h5>
                                                <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1"></i> 8 Cities</a>
                                                <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2"></i> <span>143+ Tour Places</span></a>
                                            </div>
                                        </div>
                                        <div className="tour-offer bg-success">30% Off</div>
                                        <div className="international-plus-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                    <div className="international-item">
                                        <img src="img/explore-tour-2.jpg" className="img-fluid w-100 rounded" alt="Tour" />
                                        <div className="international-content">
                                            <div className="international-info">
                                                <h5 className="text-white text-uppercase mb-2">Germany</h5>
                                                <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1"></i> 12 Cities</a>
                                                <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2"></i> <span>21+ Tour Places</span></a>
                                            </div>
                                        </div>
                                        <div className="international-plus-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                    <div className="international-item">
                                        <img src="img/explore-tour-3.jpg" className="img-fluid w-100 rounded" alt="Tour" />
                                        <div className="international-content">
                                            <div className="tour-offer bg-warning">45% Off</div>
                                            <div className="international-info">
                                                <h5 className="text-white text-uppercase mb-2">Spain</h5>
                                                <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1"></i> 9 Cities</a>
                                                <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2"></i> <span>133+ Tour Places</span></a>
                                            </div>
                                        </div>
                                        <div className="international-plus-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                    <div className="international-item">
                                        <img src="img/explore-tour-4.jpg" className="img-fluid w-100 rounded" alt="Tour" />
                                        <div className="international-content">
                                            <div className="international-info">
                                                <h5 className="text-white text-uppercase mb-2">Japan</h5>
                                                <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1"></i> 8 Cities</a>
                                                <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2"></i> <span>137+ Tour Places</span></a>
                                            </div>
                                        </div>
                                        <div className="international-plus-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                    <div className="international-item">
                                        <img src="img/explore-tour-5.jpg" className="img-fluid w-100 rounded" alt="Tour" />
                                        <div className="international-content">
                                            <div className="international-info">
                                                <h5 className="text-white text-uppercase mb-2">Italy</h5>
                                                <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1"></i> 10 Cities</a>
                                                <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2"></i> <span>102+ Tour Places</span></a>
                                            </div>
                                        </div>
                                        <div className="international-plus-icon">
                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white"></i></a>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ExploreTour;