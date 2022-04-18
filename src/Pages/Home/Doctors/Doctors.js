import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctor] = useState([]);

    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctor(data));
    }, []);
    return (
        <div id='doctor' className='container mt-5'>
            <div className="row">
                <h2 className='services-title'> Our Doctor : {doctors.length}</h2>
                <div className='services-container'>
                {
                    doctors.map(doctor=><Doctor
                        doctor={doctor}
                    key={doctor.id}
                    ></Doctor>)
                }
                </div>
            </div>
        </div>
    );
};

export default Doctors;