import React from 'react';
import './About.css'
import me from '../../Image/me.jpg'
const About = () => {
    return (
        <div className='container'>

            <div class="card-body">
                <h5 class="card-title">You Khnow About Me</h5>
                <img width='100%' src={me} alt="" />
                <p class="card-text">
                I am Md. Rayhan Islam.  I'm learning programming.  I want to learn programming and take a job in any software company.  I like programming a lot.  It feels bad to do programming when the program is wrong.  When I correct a mistake, I like the best of the best.  Programming I give time every day.  I work hard at programming.  I want to build a career by programming.  I want to help different helpless people in the future.

                </p>
            </div>



        </div>
    );
};

export default About;