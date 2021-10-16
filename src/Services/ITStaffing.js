import React from 'react'
import SiderBar from '../Main/SideBar'
import { Carousel } from 'react-responsive-carousel';
import SupplierLogos from '../Main/SupplierLogos';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ITStaffing() {    
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
                                    <h3>US IT Recruitment</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-services-page area-padding">
                <div className="container">
                    <div className="row">
                        <SiderBar pagename={"Staffing"}></SiderBar>
                        {/* Start service page */}
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="row">
                                <h3>Staff Augmentation</h3>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single-well mar-well">
                                        <p>In staffing and recruitment, whether it is a single position or large-scale staffing initiative, our proprietary candidate search algorithms and AI powered service enable us to identify, attract, screen and acquire the best candidates for our clients. Our personalized software systems allow our clients to gain a competitive advantage through our highly skilled consultants. Further, our candidates allow us to become one of the fastest growing and most reliable recruiting firms in the world. </p>
                                        <p>Our algorithms are extremely cost effective in a manner that helps meet our client’s goals but also provide personalized service. We provide optimal candidates for your specific needs, ranging from temporary to permanent placement options, including contingency staffing. We cater to a wide range of verticals including healthcare, technology, marketing, banking, pharmaceuticals and biotechnology, energy, and over 15 other specialty practice areas.</p>
                                        <p>We’re superior to other executive recruiting firms because our software selectively filters our consultants by functional area, industry sector, position and geographic location; we also include specialized personnel in the selection process to further customize our services, relationship and terms around our clients’ unique needs and expectations.</p>
                                        <p>With local knowledge and a global reach, we leverage our network of resources to provide staffing solutions to businesses that need to lead in their markets.</p>
                                    </div>
                                </div>
                                <h4>Why Developers Code ?</h4>
                                <div className="col-md-12">
                                    <div className="single-well mar-well">
                                        <ul className="marker-list">
                                            <li><b>Value:</b> We save our clients time and money, by presenting only the best talent recruited from all over the world.</li>
                                            <li><b>Global Reach: </b>You can’t always find talent in your own backyard, or your neighbors for that matter. We are dedicated to networking and scouting for the very best from across the globe.</li>
                                            <li><b>AI Powered:</b> Our service is what sets us apart from the competition. We provide the highest caliber of machine + human powered personalized service, to fit your needs.</li>
                                            <li><b>Confidence:</b> With Robust on your side, you can be confident that the consultants we provide deliver the best output regardless of the situation. </li>
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