import React from 'react';

const Service = ({service}) => {
    const {img, name, price, description} =service
    return (
        <div>
            <img src={img} alt="" />
            <h1> name: {name}</h1>
           <p> Price: {price}</p>
           <p>{description}</p>
           <button className='btn btn-primary'> Book: {name}</button>
        </div>
    );
};

export default Service;