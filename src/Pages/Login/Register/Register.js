import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate =useNavigate();
    const navigateLogin = () =>{
        navigate('/login')
    }
    const handleRegister = event =>{
        event.preventDefault();
    }
    return (
        <div className='register-form'>
         <h1 style={{textAlign: 'center'}}>  Please Register </h1>
         <form onSubmit={handleRegister}>
             <input type="text" name='name' id='' placeholder='Your Name' />
             <input type="email" name='email' id='' placeholder='Your Email' />
             <input type="password" name='password' id='' placeholder='Your Password' />
             <input type="submit" value="Register" />
         </form>
         <p style={{textAlign: 'center'}}>All ready have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please Login </Link></p>

        </div>
    );
};

export default Register;