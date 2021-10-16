import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class MainHeader extends Component {
    render() {
        return (
                <header className="header-two">
                    {/* Start top bar */}
                    <div className="topbar-area topbar-area-3 fix hidden-xs">
                        <div className="container">
                            <div className="row">
                                <div className=" col-md-9 col-sm-9">
                                    <div className="topbar-left">
                                        <ul>
                                            <li><a href="mailto:info@developerscode.com"><i className="fa fa-envelope" /> info@developerscode.com</a></li>                                            
                                            <li><a href="#"><i className="fa fa-clock-o" /> Mon - Fri: 10:00 - 18:00</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <div className="top-social">
                                        <ul>
                                            <li><a href="https://www.linkedin.com/company/developerscode"><i className="fa fa-linkedin" /></a></li>
                                            <li><a href="https://www.facebook.com/developercodes"><i className="fa fa-facebook" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End top bar */}
                    {/* header-area start */}
                    <div id="sticker" className="header-area header-area-2 header-area-3 hidden-xs">
                        <div className="container">
                            <div className="row">
                                {/* logo start */}
                                <div className="col-md-3 col-sm-3">
                                    <div className="logo">
                                        {/* Brand */}
                                        <Link to={"/"} className="navbar-brand">
                                            <img src={"/img/logo/logo.png"}></img></Link>
                                    </div>
                                    {/* logo end */}
                                </div>
                                <div className="col-md-9 col-sm-9">
                                    {/* mainmenu start */}
                                    <nav className="navbar navbar-default">
                                        <div className="collapse navbar-collapse" id="navbar-example">
                                            <div className="main-menu">
                                                <ul className="nav navbar-nav navbar-right">
                                                <li><Link to={"/"} className="pagess">Home</Link></li>
                                                    <li><Link to={"/aboutus"} className="pagess">Aboutus</Link></li>
                                                    <li><Link className="pagess" to={"/services/artificial-intelligence"}>Services</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link to={"/services/artificial-intelligence"}>Artificial Intelligence</Link></li>
                                                            <li><Link to={"/services/cloud-solutions"}>Cloud Services</Link></li>
                                                            <li><Link to={"/services/web-solutions"}>Web Solutions</Link></li>
                                                            <li><Link to={"/services/mobile-solutions"}>Mobile Solutions</Link></li>
                                                            <li><Link to={"/services/digital-marketing-services"}>Digital Marketing</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link className="pagess" to={"/product/flight-booking-engine"}>Products</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link to={"/product/flight-booking-engine"}>Flight Booking Engine</Link></li>
                                                            <li><Link to={"/product/hotel-booking-engine"}>Hotel Booking Engine</Link></li>
                                                            <li><Link to={"/product/visa-booking-engine"}>Visa Booking Engine</Link></li>
                                                            {/* <li><Link to={"/product/travel-erp-software"}>Travel ERP Software</Link></li>
                                                            <li><Link to={"/product/b2b-travel-software"}>B2B Travel Software</Link></li>
                                                            <li><Link to={"/product/b2c-travel-software"}>B2C Travel Software</Link></li> */}
                                                            {/* <li><Link to={"/product/document-management-system"}>Document Management System</Link></li>
                                                            <li><Link to={"/product/chartered-accounting-management-software"}>CA Management</Link></li> */}
                                                        </ul>
                                                    </li>
                                                    <li><Link to={"/hiredeveloper/dedicated-developer"} className="pagess">Hire Developers</Link></li>
                                                    {/* <li><Link to={"/services/itstaffing"}>US Recruitment</Link></li> */}
                                                    {/* <li><Link to={"/blog"}>Blog</Link></li> */}
                                                    <li><Link to={"/careers"} className="pagess">Careers</Link></li>
                                                    <li><Link to={"/contactus"} className="pagess">ContactUs</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    {/* mainmenu end */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* header-area end */}
                    
                </header>
        )
    }
}
