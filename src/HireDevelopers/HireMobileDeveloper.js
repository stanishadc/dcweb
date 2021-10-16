import React from 'react'
import SiderBar from '../Main/SideBar'
import { Carousel } from 'react-responsive-carousel';
import SupplierLogos from '../Main/SupplierLogos';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function HireMobileDevelopers() {
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
                                    <h3>Dedicated Developers</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-services-page area-padding">
                <div className="container">
                    <div className="row">
                        <SiderBar pagename={"HireMobile"}></SiderBar>
                        {/* Start service page */}
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="row">
                                <h3>Hire Dedicated Developers for Web & Mobile Development</h3>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single-well mar-well">
                                        <p>Developers Code an enterprise mobile application development company with 5 years of experience, provide full-stack mobile application development services.We have extensive experience in web design and development. We design and develop broad range of applications across all platforms.</p>
                                        <p>Our first-time-right offshore .NET developers build fast, secure, and scalable web apps for global clients looking to get robust yet cost-effective .NET solutions</p>
                                    </div>
                                </div>
                                <h4>Mobility Solutions</h4>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Android Developer</li>
                                            <li>iOS Developer</li>
                                            <li>React Native Developer</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>Phonegap Developer</li>
                                            <li>Xamrian Developer</li>
                                            <li>Flutter Developer</li>
                                        </ul>
                                    </div>
                                </div>
                                <h4>Web and Full Stack</h4>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li>PHP Developer</li>
                                            <li>.Net Developer</li>
                                            <li>Python Developer</li>
                                            <li>Angular Developer</li>
                                            <li>WordPress Developer</li>
                                            <li>Laravel Developer</li>
                                            <li>ReactJS Developer</li>
                                            <li>Vue JS Developer</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                        <li>Full Stack Developer</li>
                                        <li>Magento Developer</li>
                                        <li>Node JS Developer</li>
                                        <li>e-Commerce Developer</li>
                                        <li>CMS Developer</li>
                                        <li>Shopify Developer</li>
                                        <li>Sharepoint Developer</li>
                                        <li>SiteCore Developer</li>
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