import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {img, name, price, description} =service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h1> {name}</h1>
           <h5> Price: {price}</h5>
           <p>{description}</p>
           <button className='btn btn-primary'> Book: {name}</button>
        </div>
    );
};

export default Service;