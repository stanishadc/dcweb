import React from 'react'
import SiderBar from '../Main/SideBar'
import OwlCarousel from 'react-owl-carousel2';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function CloudServices() { 
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
            <div className="page-area"  style={{background:'/flightsuppliers/flightimage.jfif !important'}}>
                <div className="breadcumb-overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcrumb text-center">
                                <div className="section-headline white-headline text-center">
                                    <h3>Cloud Services</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-services-page area-padding">
                <div className="container">
                    <div className="row">
                        <SiderBar pagename={"Cloud"}></SiderBar>
                        {/* Start service page */}
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="row">
                                <h3>Cloud Services</h3>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single-well mar-well">
                                        <p>Developers Code is a leading cloud computing company in Hyderabad, Our services are designed to meet the cloud computing needs of businesses of all sizes.Developing and deploying applications on the cloud requires careful assessment and planning for security, scalability, capacity and integration with other on-premise or cloud applications.</p>
                                    </div>
                                </div>
                                <h4>Developers Code Offers</h4>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Cloud Assessment Consulting</li>
                                            <li>Cloud Application Development</li>
                                            <li>Cloud Application Migration</li>
                                            <li>Cloud Application Integration</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Software as a Service (Saas)</li>
                                            <li>Desktop as a Service (Daas)</li>
                                            <li>Platform as a Service (Paas)</li>
                                            <li>Infrastructure as a Service (Iaas)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <h4>Popular Cloud Servers</h4>
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