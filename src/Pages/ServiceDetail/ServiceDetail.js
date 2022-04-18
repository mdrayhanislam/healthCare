import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1> our service: {serviceId}</h1>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkot</button>
                </Link>
            </div>

        </div>
    );
};

export default ServicesDetails;