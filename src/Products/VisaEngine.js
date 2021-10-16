import React from 'react'
import SiderBar from '../Main/SideBar'
import { Carousel } from 'react-responsive-carousel';
import SupplierLogos from '../Main/SupplierLogos';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function VisaEngine() {
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
                                    <h3>Visa Booking Engine</h3>
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
                        <SiderBar pagename={"VisaEngine"}></SiderBar>
                        {/* Start service page */}
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="row">
                                <h3>Visa Travel Agent Software</h3>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single-well mar-well">
                                        <p>Developers Code offers Online Visa Software for Travel Agencies.Visa Booking System integrated with different supplier API's</p>
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
                                </div>
                            <SupplierLogos></SupplierLogos>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}