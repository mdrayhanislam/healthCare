import React from 'react';

const Doctor = ({doctor}) => {
    const {img, name, expert, phone} = doctor;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h1> {name}</h1>
            <h4>{expert}</h4>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default Doctor;