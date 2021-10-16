import React, { Component } from 'react'
import iframe from 'react-iframe';
export default class Conntactus extends Component {
    render() {
        return (
            <div>
                {/* Start Bottom Header */}
                <div className="page-area">
                    <div className="breadcumb-overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="breadcrumb text-center">
                                    <div className="section-headline white-headline text-center">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <ul>
                                        <li className="home-bread">Home</li>
                                        <li>Conatct Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END Header */}

                <div className="map-area area-padding bg-color">
                    <div className="container">
                        <div className="row">
                            {/* Start Right Google Map */}
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                {/* Start Map */}
                                <div className="map-area">
                                <div style={{ width: '100%', height: 410 }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15228.092594714702!2d78.5601143!3d17.4106767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf1563c1b0fdc630!2sDevelopers%20Code!5e0!3m2!1sen!2sin!4v1615268572650!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
                                </div>
                                {/* End Map */}
                            </div>
                            {/* End Right Google Map */}
                        </div>
                    </div>
                </div>
                {/* Start contact Area */}
                <div className="contact-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="contact-inner">
                                {/* Start contact icon column */}
                                <div className="col-md-6 col-sm-4 col-xs-12">
                                    <div className="contact-icon text-center">
                                        <div className="single-icon">
                                            <i className="fa fa-mobile" />
                                            <p>
                                                <span>Email : support@developerscode.com</span><br/ >
                                                <span>Monday-Friday (10am-18pm)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Start contact icon column */}
                                <div className="col-md-6 col-sm-4 col-xs-12">
                                    <div className="contact-icon text-center">
                                        <div className="single-icon">
                                            <i className="fa fa-map-marker" />
                                            <p>                                               
                                                <span>3rd Floor, Above Adarsh Mart, Bank Colony<br/>
                                                Uppal, Hyderabad, Telangana - 500039,<br/>India</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
                {/* End Contact Area */}
            </div>
        )
    }
}
