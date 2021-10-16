import React from 'react'
const Aboutus = () => {
    return (
        <div>
            <div>
                {/* Start Bottom Header */}
                <div className="page-area">
                    <div className="breadcumb-overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="breadcrumb text-center">
                                    <div className="section-headline white-headline text-center">
                                        <h3>About us</h3>
                                    </div>
                                    <ul>
                                        <li className="home-bread">Home</li>
                                        <li>About us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END Header */}
                {/* Start Work proses Area */}
                <div className="work-proses fix area-padding-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="row">
                                    <div className="work-proses-inner text-center">
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="single-proses">
                                                <div className="proses-content">
                                                    <div className="proses-icon point-blue">
                                                        <span className="point-view">01</span>
                                                        <a href="#"><i className="ti-layers" /></a>
                                                    </div>
                                                    <div className="proses-text">
                                                        <h4>Vision</h4>
                                                        <p>Our Vision at DC is to be a top-tier organization that delivers interactive mobile technology solutions to clients all over the globe, while providing a dynamic and stimulating environment for our employees needed internally to reach our lofty goal.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End column */}
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="single-proses">
                                                <div className="proses-content">
                                                    <div className="proses-icon point-orange">
                                                        <span className="point-view">02</span>
                                                        <a href="#"><i className="ti-user" /></a>
                                                    </div>
                                                    <div className="proses-text">
                                                        <h4>Mission</h4>
                                                        <p>Our Mission is to inspire brands to create meaningful interactions with their customers through technology and creativity. Our mission guides us through our decisions and actions. It's at the heart of our being. To put in simpler terms, we believe through “Big Ideas” we inspire, and through creativity and technology, we create meaningful interactions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End column */}
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="single-proses last-item">
                                                <div className="proses-content">
                                                    <div className="proses-icon point-green">
                                                        <span className="point-view">03</span>
                                                        <a href="#"><i className="ti-briefcase" /></a>
                                                    </div>
                                                    <div className="proses-text">
                                                        <h4>Philosophy</h4>
                                                        <p>The business philosophy of the company is to focus on the exact outcome of the product and project which shall conquer the entire market with its high performance and compatibility. Developers Code meets Delivering Right Solutions Right Time. Great stress is laid on proper communication, transparency and human relations, which form an integral part of the corporate culture.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End column */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Work proses Area */}
                {/* Start Brand Area */}
                <div className="about-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="about-content">
                                    <img src="img/about/ab.jpg" alt />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="about-text">
                                    <h3>About our <span className="color-2">Developers Code</span> software firm.</h3>
                                    <p>Developers Code is operating since 2015 and is located in India. The company is promoted and managed by a group of talented IT professionals. At Developers Code we are confident about the future and are keen to shape it with our constant and continuing efforts in terms of intuition and innovation</p>
                                    <ul className="hidden-sm">
                                        <li><a href="#">Top-notch quality software development services</a></li>
                                        <li><a href="#">Mobility solutions that deliver your brand value via a remarkable mobile experience</a></li>
                                        <li><a href="#">Build enterprise web applications that are scalable, robust, and offer exceptional user experience to your tech-savvy users</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Banner Area */}
            </div>
        </div>
    );
};
export default Aboutus
