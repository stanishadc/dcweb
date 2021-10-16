import React from 'react'
import SiderBar from '../Main/SideBar'
import { Carousel } from 'react-responsive-carousel';
import SupplierLogos from '../Main/SupplierLogos';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MetaTags from 'react-meta-tags';
export default function B2CTravel() {    
    return (
        <div>
            <MetaTags>
            <title>B2C Travel Software for Travel Agencies and Travel Companies</title>
            <meta name="description" content="B2B Travel Software For Travel Agencies and Travel Companies" />
            <meta property="og:title" content="B2B Travel Software For Travel Agencies and Travel Companies" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
            <div className="page-area"  style={{background:'/flightsuppliers/flightimage.jfif !important'}}>
                <div className="breadcumb-overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcrumb text-center">
                                <div className="section-headline white-headline text-center">
                                    <h3>B2C Travel Software</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END Header */}
            {/* End services Area */}
            <div className="single-services-page area-padding">
                <div className="container">
                    <div className="row">
                        <SiderBar pagename={"B2CTravels"}></SiderBar>
                        {/* Start service page */}
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="row">
                                <h3>B2C Travel Agency Software</h3>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single-well mar-well">
                                        <p>When replacing a multi-lined selection of text, the generated dummy text maintains the amount of lines.</p>
                                    </div>
                                </div>
                                <h4>Main Features</h4>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Multiple Suppliers Integration</li>
                                            <li>Create Multiple Agency Profile</li>
                                            <li>Wallet and Credit Features</li>
                                            <li>Separate Logins for Branchs</li>
                                            <li>Multi Currency and Multi Lingual</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>MultiplePayment Gateways</li>
                                            <li>Agency Wise Reports</li>
                                            <li>Branch Wise Reports</li>
                                            <li>Profit and Loss Reports</li>
                                            <li>Multiple Sales Reports</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single-page mar-well">
                                        <Carousel showThumbs={false} showStatus={false} showArrows={true}>
                                            <div className="page-img elec-page">
                                                <img src="/img/service/s1.png" alt />
                                            </div>
                                            <div className="page-img elec-page">
                                                <img src="/img/service/s1.png" alt />
                                            </div>
                                            <div className="page-img elec-page">
                                                <img src="/img/service/s1.png" alt />
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            <SupplierLogos></SupplierLogos>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}