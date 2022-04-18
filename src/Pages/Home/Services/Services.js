import React, { useEffect, useState } from 'react';
import Service from '../Sercice/Service';
import './Services.css'
const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id='services' className='container mt-5'>
            <div className="row">
                <h2 className='services-title'> Our services : {services.length}</h2>
                <div className='services-container'>
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