import OwlCarousel from 'react-owl-carousel2';
export default function SiderBar(props) {
    const options = {
        'items': 4,
        'rewind': true,
        'autoplay': true,
        'loop': ((".owl-carousel .item").length > 1) ? true : false,
        'nav': false,
        'dots': false,
        'margin': 20,
        'responsive': {
            '768': {
                'items': 3
            },
            '992': {
                'items': 4
            }
        }
    }
    return (
        <div>
            <h4>Suppliers</h4>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="brand-content">
                        <div className="brand-items">
                            <OwlCarousel options={options} margin={0}>
                                <div className="single-brand-item">
                                    <img src="/hotelsuppliers/expedia.svg" alt="Hotel suppliers" />
                                </div>
                                <div className="single-brand-item">
                                    <img src="/hotelsuppliers/hotelbeds.svg" alt="Hotel suppliers" />
                                </div>
                                <div className="single-brand-item">
                                    <img src="/hotelsuppliers/desiya.png" alt="Hotel suppliers" />
                                </div>
                                <div className="single-brand-item">
                                    <img src="/hotelsuppliers/rezlive.png" alt="Hotel suppliers" />
                                </div>
                                <div className="single-brand-item">
                                    <img src="/hotelsuppliers/GRN.png" alt="Hotel suppliers" />
                                </div>
                                <div className="single-brand-item">
                                    <img src="/hotelsuppliers/tboholidays.svg" alt="Hotel suppliers" />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="brand-content">
                        <div className="brand-items">
                            <OwlCarousel options={options} margin={40}>
                                <div className="single-brand-item">
                                    <img src="/flightsuppliers/amadeus.svg" alt="flight suppliers" />
                                </div>
                                <div className="single-brand-item">
                                    <img src="/flightsuppliers/sabre.svg" alt="flight suppliers" />
                                </div>
                                <div className="single-brand-item">
                                    <img src="/flightsuppliers/travelfusion.svg" alt="flight suppliers" />
                                </div>
                                <div className="single-brand-item">
                                    <img src="/flightsuppliers/travelport.png" alt="flight suppliers" />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    </div>
            </div>

        </div>
    )
}