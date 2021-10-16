import React, { Component } from 'react'

export default class SubHeader extends Component {
    render() {
        return (
            <div>
            <header className="header-two">
                {/* Start top bar */}
                <div className="topbar-area fix hidden-xs">
                    <div className="container">
                        <div className="row">
                            <div className=" col-md-9 col-sm-9">
                                <div className="topbar-left">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-envelope" /> support@developerscode.com</a></li>
                                        <li><a href="#"><i className="fa fa-phone-square" /> +91-9123456789</a></li>
                                        <li><a href="#"><i className="fa fa-clock-o" /> Mon - Fri: 10:00 - 18:00</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <div className="top-social">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-skype" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-google" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End top bar */}
                {/* header-area start */}
                <div id="sticker" className="header-area header-area-2 hidden-xs">
                    <div className="container">
                        <div className="row">
                            {/* logo start */}
                            <div className="col-md-3 col-sm-3">
                                <div className="logo">
                                    {/* Brand */}
                                    <a className="navbar-brand white-logo" href="index.html">
                                        <img src="img/logo/logo.png" alt />
                                    </a>
                                    <a className="navbar-brand black-logo" href="index.html">
                                        <img src="img/logo/logo2.png" alt />
                                    </a>
                                </div>
                                {/* logo end */}
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <div className="header-right-link">
                                    {/* search option end */}
                                    <a className="s-menu" href="login.html">Get in Estimate</a>
                                </div>
                                {/* mainmenu start */}
                                <nav className="navbar navbar-default">
                                    <div className="collapse navbar-collapse" id="navbar-example">
                                        <div className="main-menu">
                                            <ul className="nav navbar-nav navbar-right">
                                                <li><a className="pagess" href="index.html">Home</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="index.html">Home 01</a></li>
                                                        <li><a href="index-2.html">Home 02</a></li>
                                                        <li><a href="index-3.html">Home 03</a></li>
                                                        <li><a href="index-4.html">Home 04 <span className="new">New</span></a></li>
                                                        <li><a href="index-5.html">Home 05 <span className="new">New</span></a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="pagess" href="#">Pages</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="about.html">About</a></li>
                                                        <li><a href="team.html">team</a></li>
                                                        <li><a href="faq.html">FAQ</a></li>
                                                        <li><a href="review.html">Review</a></li>
                                                        <li><a href="pricing.html">Pricing</a></li>
                                                        <li><a href="login.html">Login</a></li>
                                                        <li><a href="signup.html">Signup</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="pagess" href="#">Services</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="service.html">All services</a></li>
                                                        <li><a href="single-service.html">Service-details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="pagess" href="#">Works</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="project.html">Projects 01</a></li>
                                                        <li><a href="project-2.html">Projects 02</a></li>
                                                        <li><a href="single-project.html">Project details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="pagess" href="#">Blog</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="blog.html">Blog grid</a></li>
                                                        <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">contacts</a></li>
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
                {/* mobile-menu-area start */}
                <div className="mobile-menu-area hidden-lg hidden-md hidden-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mobile-menu">
                                    <div className="logo">
                                        <a href="index.html"><img src="img/logo/logo2.png" alt /></a>
                                    </div>
                                    <nav id="dropdown">
                                        <ul>
                                            <li><a className="pagess" href="index.html">Home</a>
                                                <ul className="sub-menu">
                                                    <li><a href="index.html">Home 01</a></li>
                                                    <li><a href="index-2.html">Home 02</a></li>
                                                    <li><a href="index-3.html">Home 03</a></li>
                                                    <li><a href="index-4.html">Home 04 <span className="new">New</span></a></li>
                                                    <li><a href="index-5.html">Home 05 <span className="new">New</span></a></li>
                                                </ul>
                                            </li>
                                            <li><a className="pagess" href="#">Pages</a>
                                                <ul className="sub-menu">
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="team.html">team</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                    <li><a href="review.html">Review</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    <li><a href="login.html">Login</a></li>
                                                    <li><a href="signup.html">Signup</a></li>
                                                </ul>
                                            </li>
                                            <li><a className="pagess" href="#">Services</a>
                                                <ul className="sub-menu">
                                                    <li><a href="service.html">All services</a></li>
                                                    <li><a href="single-service.html">Service-details</a></li>
                                                </ul>
                                            </li>
                                            <li><a className="pagess" href="#">Works</a>
                                                <ul className="sub-menu">
                                                    <li><a href="project.html">Projects 01</a></li>
                                                    <li><a href="project-2.html">Projects 02</a></li>
                                                    <li><a href="single-project.html">Project details</a></li>
                                                </ul>
                                            </li>
                                            <li><a className="pagess" href="#">Blog</a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog.html">Blog grid</a></li>
                                                    <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">contacts</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile-menu-area end */}
            </header>
            </div>
        )
    }
}
