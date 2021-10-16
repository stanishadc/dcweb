import React from 'react'
import SiderBar from '../Main/SideBar'
import { Carousel } from 'react-responsive-carousel';
import SupplierLogos from '../Main/SupplierLogos';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ArtificialIntelligence() {    
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
                                    <h3>Artificial Intelligence Solutions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-services-page area-padding">
                <div className="container">
                    <div className="row">
                        <SiderBar pagename={"AI"}></SiderBar>
                        {/* Start service page */}
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="row">
                                <h3>Enterprise Artificial Intelligence Solutions</h3>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single-well mar-well">
                                        <p>Redefine your business and accelerate your digital transformation by implementing cutting-edge artificial intelligence services in your business. From workflow automation to video analysis, get everything you need to empower your business operations.Build intelligent .NET apps with features like emotion and sentiment detection, vision and speech recognition, language understanding, knowledge, and search</p>
                                    </div>
                                </div>
                                <h4>ML.NET</h4>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Product Recommendation</li>
                                            <li>Price Predication</li>
                                            <li>Image classification</li>                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Sentiment analysis</li>
                                            <li>Sales forecasting</li>
                                            <li>Fraud detection</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}