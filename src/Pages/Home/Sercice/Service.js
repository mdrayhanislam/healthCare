import React from 'react';

const Service = ({service}) => {
    const {img} =service
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Service;