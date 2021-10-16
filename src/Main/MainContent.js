import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SubContent extends Component {
  render() {
    return (
      <div>
        {/* Start Slider Area */}
        <div className="intro-area intro-area-3">
          <div className="bg-wrapper">
            <img src="img/background/bg2.jpg" alt />
          </div>
          <div className="intro-content">
            <div className="slider-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="slide-all-text">
                      {/* layer 1 */}
                      <div className="layer-1 wow fadeInUp" data-wow-delay="0.3s">
                        <h2 className="title2">Build an application powered by <span className="color-2">Artificial Intelligence</span> </h2>
                      </div>
                      {/* layer 2 */}
                      <div className="layer-2 wow fadeInUp" data-wow-delay="0.5s">
                        <p>We develop effective plans to move your customers behaviour. customer can be always his profit.</p>
                      </div>
                      {/* layer 3 */}
                      <div className="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                        <a href="#" className="ready-btn">Get In Touch</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 hidden-xs">
                    <div className="slide-images-inner wow fadeInUp" data-wow-delay="0.5s">
                      <div className="slide-images">
                        <img src="img/slider/s1.png" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area */}
        {/* Welcome service area start */}
        <div className="welcome-area welcome-area-2 bg-color area-padding-2">
          <div className="container">
            <div className="row">
              <div className="all-well-services">
                {/* single-well end*/}
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="well-services">
                    <div className="well-img">
                      <a className="big-icon" href="#"><i className="flaticon-041-computing-cloud" /></a>
                    </div>
                    <div className="main-wel">
                      <div className="wel-content">
                        <h4>Cloud Solutions</h4>
                        <p>Expertise in AWS,Microsoft Azure, GCP, Docker, Kubernetes and Jenkins for advanced devops and cloud integration</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single-well end*/}
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="well-services">
                    <div className="well-img">
                      <a className="big-icon" href="#"><i className="flaticon-130-web" /></a>
                    </div>
                    <div className="main-wel">
                      <div className="wel-content">
                        <h4>Web Solutions</h4>
                        <p>Custom web solutions designed and developed to help you augment ROI and transform visitors into rewarding opportunities.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single-well end*/}
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="well-services">
                    <div className="well-img">
                      <a className="big-icon" href="#"><i className="flaticon-083-mobile" /></a>
                    </div>
                    <div className="main-wel">
                      <div className="wel-content">
                        <h4>Mobile Solutions</h4>
                        <p>Mobile applications that offer flawless execution across devices & are tailor-made for user-facing & corporate environments</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single-well end*/}
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="well-services">
                    <div className="services-img">
                      <a className="big-icon" href="#"><i className="flaticon-125-team" /></a>
                    </div>
                    <div className="main-wel">
                      <div className="wel-content">
                        <h4>Dedicated Team</h4>
                        <p>We have expertise dedicated outsource developers and teams, will helps you take control of costs, and make sure your operations run smoothly</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* single-well end*/}
              </div>
            </div>
          </div>
        </div>
        {/* Welcome service area End */}
        {/* Start Brand Area */}
        <div className="about-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="about-content">
                  <img src="img/about/ab.jpg" alt />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="about-text">
                  <h3>About our <span className="color-2">Developers Code</span></h3>
                  <p>Developers Code is operating since 2015 and is located in India. The company is promoted and managed by a group of talented IT professionals. At Developers Code we are confident about the future and are keen to shape it with our constant and continuing efforts in terms of intuition and innovation</p>
                  <ul className="hidden-sm">
                    <li><a href="#">Top-notch quality software development services</a></li>
                    <li><a href="#">Mobility solutions that deliver your brand value via a remarkable mobile experience</a></li>
                    <li><a href="#">Build enterprise web applications that are scalable, robust, and offer exceptional user experience to your tech-savvy users</a></li>
                  </ul>
                  <Link className="ab-btn" to={"/aboutus"}>Know more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Banner Area */}
        {/* Service area start */}
        <div className="service-area bg-color area-padding">
          <div className="container">
            <div className="row">
              <div className="all-service">
                <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-service text-service">
                    <div className="service-img">
                      <img src="img/icon/lopard1.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">MANUFACTURING</a></h4>
                      <p>Advanced software solutions for enterprise that help you leap into the Industry 4.0.</p>
                    </div>
                  </div>
                </div>
                {/* single-service end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="single-service">
                    <div className="service-img">
                      <img src="img/icon/lopard4.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">HEALTHCARE</a></h4>
                      <p>User-friendly, mission-critical healthcare solutions for global service providers.</p>
                    </div>
                  </div>
                </div>
                {/* single-service end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="single-service text-service">
                    <div className="service-img">
                      <img src="img/service/w2.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">RETAIL & ECOMMERCE</a></h4>
                      <p>Revolutionize your brick and mortar store with engaging and exciting software.</p>
                    </div>
                  </div>
                </div>
                {/* single-service end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="single-service">
                    <div className="service-img">
                      <img src="img/service/w3.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">TRAVEL & HOSPITALITY</a></h4>
                      <p>Extend the comfort of your hospitality business with best-in-class software solutions.</p>
                    </div>
                  </div>
                </div>
                {/* single-well end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="single-service text-service">
                    <div className="service-img">
                      <img src="img/service/w4.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">LOGISTICS</a></h4>
                      <p>Leverage the latest technology trends that help run your logistics business seamlessly.</p>
                    </div>
                  </div>
                </div>
                {/* single-service end*/}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="single-service">
                    <div className="service-img">
                      <img src="img/service/w5.png" alt />
                    </div>
                    <div className="service-content">
                      <h4><a href="#">FINTECH</a></h4>
                      <p>Scalable, secure finance solutions that help you satisfy tech-savvy customers</p>
                    </div>
                  </div>
                </div>
                {/* single-service end*/}
              </div>
            </div>
          </div>
        </div>
        {/* Service area End */}
        
        {/* End Tab end */}        
        {/* Start project Area */}
      </div>
    )
  };
};