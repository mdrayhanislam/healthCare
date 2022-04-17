import React, { useEffect, useState } from 'react';
import Service from '../Sercice/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('gym-service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='container'>
            <div className="row">
                <h2 className='services-title'> services : {services.length}</h2>
                <div className='container'>
                {
                    services.map(service=> <Service
                    service={service}
                    key={service.id}
                    >

                    </Service>)
                }
                </div>
            </div>
        </div>
    );
};

export default Services;