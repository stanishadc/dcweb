import React from 'react';
import { useParams } from 'react-router-dom';
import ArtificailIntelligence from './ArtificialIntelligence';
import CloudServices from './CloudServices';
import WebSolutions from './WebSolutions';
import MobileSolutions from './MobileSolutions';
import DigitalMarketing from './DigitalMarketing';
import ITStaffing from './ITStaffing';
export default function Services() {
    const { type } = useParams();
    return (
        <>
          {type === 'artificialintelligence' && <ArtificailIntelligence />}
          {type === 'cloudservices' && <CloudServices />}
          {type === 'websolutions' && <WebSolutions />}
          {type === 'mobilesolutions' && <MobileSolutions />}
          {type === 'digitalmarketing' && <DigitalMarketing />}
          {type === 'itstaffing' && <ITStaffing />}
        </>
      );
}
