import { Link } from 'react-router-dom';

export default function SiderBar(props) {
    return (
        <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="page-head-left">
                <div className="single-page-head">
                    <h4>Services</h4>
                    <div className="left-menu">
                        <ul>
                            <li className={props.pagename === "AI" ? 'active' : ''}><Link to={"/services/artificial-intelligence"}>Artificial Intelligence</Link></li>
                            <li className={props.pagename === "Cloud" ? 'active' : ''}><Link to={"/services/cloud-solutions"}>Cloud Services</Link></li>
                            <li className={props.pagename === "Web" ? 'active' : ''}><Link to={"/services/web-solutions"}>Web Solutions</Link></li>
                            <li className={props.pagename === "Mobile" ? 'active' : ''}><Link to={"/services/mobile-solutions"}>Mobile Solutions</Link></li>
                            <li className={props.pagename === "Digital" ? 'active' : ''}><Link to={"/services/digital-marketing-services"}>Digital Marketing</Link></li>
                            {/* <li className={props.pagename === "Staffing" ? 'active' : ''}><Link to={"/services/itstaffing"}>US Recruitment</Link></li> */}
                        </ul>
                    </div>
                </div>
                <div className="single-page-head">
                    <h4>Products</h4>
                    <div className="left-menu">
                        <ul>
                            <li className={props.pagename === "FlightEngine" ? 'active' : ''}><Link to={"/product/flight-booking-engine"}>Flight Booking Engine</Link></li>
                            <li className={props.pagename === "HotelEngine" ? 'active' : ''}><Link to={"/product/hotel-booking-engine"}>Hotel Booking Engine</Link></li>
                            <li className={props.pagename === "VisaEngine" ? 'active' : ''}><Link to={"/product/visa-booking-engine"}>Visa Booking Engine</Link></li>
                            {/* <li className={props.pagename === "TravelERP" ? 'active' : ''}><Link to={"/product/travel-erp-software"}>Travel ERP Software</Link></li>
                            <li className={props.pagename === "B2BTravels" ? 'active' : ''}><Link to={"/product/b2b-travel-software"}>B2B Travel Software</Link></li>
                            <li className={props.pagename === "B2CTravels" ? 'active' : ''}><Link to={"/product/b2c-travel-software"}>B2C Travel Software</Link></li> */}
                            {/* <li className={props.pagename === "DMS" ? 'active' : ''}><Link to={"/product/document-management-system"}>Document Management System</Link></li>
                            <li className={props.pagename === "CAM" ? 'active' : ''}><Link to={"/product/chartered-accounting-management-software"}>CA Management</Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}