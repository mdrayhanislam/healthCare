import React from 'react';

const Doctor = ({doctor}) => {
    const {img, name} = doctor;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h1> {name}</h1>
           <button className='btn btn-primary'> Book: {name}</button>
        </div>
    );
};

export default Doctor;