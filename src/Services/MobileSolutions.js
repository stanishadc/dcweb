import React from 'react'
import SiderBar from '../Main/SideBar'
import OwlCarousel from 'react-owl-carousel2';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function MobileSolutions() {
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
                                    <h3>Mobile Development Services</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-services-page area-padding">
                <div className="container">
                    <div className="row">
                        <SiderBar pagename={"Mobile"}></SiderBar>
                        {/* Start service page */}
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="row">
                                <h3>Mobile Development</h3>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single-well mar-well">
                                        <p>Developers Code is a leading mobile development company in Hyderabad, we offer extraordinary client delight while transforming ideas into efficient mobile apps.We cater to a wide range of industries spanning global clientele. Our experts are skilled at understanding the core requirements of every business and their target market to build apps that fit them best.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <h4>Our Mobile Development Services</h4>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Android Mobile Development</li>
                                            <li>iOS Mobile Development</li>
                                            <li>React Native Development</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                        <li>Flutter App Development</li>
                                            <li>Phonegap/Cordova App Development</li>
                                            <li>Xamrain Mobile Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <h4>Popular Mobile Technologies</h4>
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