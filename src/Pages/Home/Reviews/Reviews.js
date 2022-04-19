import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Doctors = () => {
    const [doctors, setDoctor] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setDoctor(data));
    }, []);
    return (
        <div id='doctor' className='container mt-5'>
            <div className="row">
                <h2 className='services-title'> Our Customer Reviews : {doctors.length}</h2>
                <div className='services-container'>
                {
                    doctors.map(doctor=><Review
                        doctor={doctor}
                    key={doctor.id}
                    ></Review>)
                }
                </div>
            </div>
        </div>
    );
};

export default Doctors;