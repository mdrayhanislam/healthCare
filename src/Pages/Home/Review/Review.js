import React from 'react';

const Doctor = ({doctor}) => {
    const {img, name, review, rating} = doctor;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h1> {name}</h1>
            <h4>Review : {review}</h4>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Doctor;