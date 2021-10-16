import React from 'react'
import SiderBar from '../Main/SideBar'
import OwlCarousel from 'react-owl-carousel2';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function WebSolutions() {
    const options = {
        'items': 4,
        'rewind': true,
        'autoplay': true,
        'loop': ((".owl-carousel .item").length > 1) ? true : false,
        'nav': false,
        'dots': false,
        'margin': 20,
        'responsive': {
            '768': {
                'items': 3
            },
            '992': {
                'items': 4
            }
        }
    }
    return (
        <div>
            {/* Start Bottom Header */}
            <div className="page-area" style={{ background: '/flightsuppliers/flightimage.jfif !important' }}>
                <div className="breadcumb-overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcrumb text-center">
                                <div className="section-headline white-headline text-center">
                                    <h3>Web Development Services</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-services-page area-padding">
                <div className="container">
                    <div className="row">
                        <SiderBar pagename={"Web"}></SiderBar>
                        {/* Start service page */}
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="row">
                                <h3>Web Development</h3>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single-well mar-well">
                                        <p>Developers Code is a leading web developement in Hyderabad,5 years of experience building world-class B2B & B2C applications. Our clients range from startups to enterprises and we have worked with a variety of industry verticals including healthcare, adtech, eLearning, data analysis, Fintech & eCommerce.We offer end-to-end custom web development services including ground-up bespoke web development, migration, update, & ongoing maintenance services.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <h4>Our Web Development Services</h4>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Web Designing</li>
                                            <li>Web Development</li>
                                            <li>Website Maintanance</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Logo Design</li>
                                            <li>Domain Registration</li>
                                            <li>eCommerce Web Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <h4>Our Technology Services</h4>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>ASP.NET Web Development</li>
                                            <li>FullStack MEAN Development Services</li>
                                            <li>Magento Web Development</li>
                                            <li>FullStack MERN Development Services</li>
                                            <li>Laravel Web Development</li>
                                            <li>PHP Web Development</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Wordpress Web Development</li>
                                            <li>Python Web Development</li>
                                            <li>React.JS Development Services</li>
                                            <li>Angular Development Services</li>
                                            <li>Node.JS Development Services</li>
                                            <li>Shopify Web Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <h4>Popular Web Technologies</h4>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="brand-content">
                                        <div className="brand-items">
                                            <OwlCarousel options={options} margin={0}>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/expedia.svg" alt="Hotel suppliers" />
                                                </div>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/hotelbeds.svg" alt="Hotel suppliers" />
                                                </div>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/desiya.png" alt="Hotel suppliers" />
                                                </div>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/rezlive.png" alt="Hotel suppliers" />
                                                </div>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/GRN.png" alt="Hotel suppliers" />
                                                </div>
                                                <div className="single-brand-item">
                                                    <img src="/hotelsuppliers/tboholidays.svg" alt="Hotel suppliers" />
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div></div></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>       
    )
}