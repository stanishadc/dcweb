import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContent from './Main/MainContent';
import MainHeader from './Main/MainHeader';
import MainFooter from './Main/MainFooter';
import Aboutus from './Company/Aboutus';
import Careers from './Company/Careers';
import ContactUs from './Company/Contactus';
import Blog from './Blog/Blog';
import FlightEngine from "./Products/FlightEngine";
import HotelEngine from './Products/HotelEngine';
import VisaEngine from './Products/VisaEngine';
import B2B from './Products/B2BTravel';
import B2C from './Products/B2CTravel';
import TravelERP from './Products/TravelERP';
import CAM from './Products/CAM';
import DMS from './Products/DMS';
import ArtificialIntelligence from './Services/ArtificialIntelligence';
import CloudServices from './Services/CloudServices';
import WebSolutions from './Services/WebSolutions';
import MobileSolutions from './Services/MobileSolutions';
import DigitalMarketing from './Services/DigitalMarketing';
import ITStaffing from './Services/ITStaffing';
import HireDeveloper from './HireDevelopers/HireMobileDeveloper';
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <MainHeader></MainHeader>
          <Switch>
            <Route exact path='/' component={MainContent} />            
            <Route path='/aboutus' component={Aboutus} />
            <Route path='/careers' component={Careers} />
            <Route path='/contactus' component={ContactUs} />
            <Route path='/blog' component={Blog} />
            <Route path='/product/flight-booking-engine' component={FlightEngine} />
            <Route path='/product/hotel-booking-engine' component={HotelEngine} />
            <Route path='/product/visa-booking-engine' component={VisaEngine} />
            <Route path='/product/b2b-travel-software' component={B2B} />
            <Route path='/product/b2c-travel-software' component={B2C} />
            <Route path='/product/travel-erp-software' component={TravelERP} />
            <Route path='/product/chartered-accounting-management-software' component={CAM} />
            <Route path='/product/document-management-system' component={DMS} />
            <Route path='/services/artificial-intelligence' component={ArtificialIntelligence} />
            <Route path='/services/cloud-solutions' component={CloudServices} />
            <Route path='/services/web-solutions' component={WebSolutions} />
            <Route path='/services/mobile-solutions' component={MobileSolutions} />
            <Route path='/services/digital-marketing-services' component={DigitalMarketing} />
            <Route path='/services/itstaffing' component={ITStaffing} />
            <Route path='/hiredeveloper/dedicated-developer' component={HireDeveloper} />
          </Switch>
          <MainFooter></MainFooter>
        </div>
      </Router>
      
    )
  }
}