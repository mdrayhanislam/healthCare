import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id, img, name, price, description} =service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h1> {name}</h1>
            <p>{id}</p>
           <h5> Price: {price}</h5>
           <p>{description}</p>
           <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'> Book: {name}</button>
        </div>
    );
};

export default Service;