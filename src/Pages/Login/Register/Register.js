import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init'


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const navigate =useNavigate();


    const navigateLogin = () =>{
        navigate('/login')
    }

    if(user){
        navigate('/home');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value
        createUserWithEmailAndPassword(email, password, name);
    }
    return (
        <div className='register-form'>
         <h1 style={{textAlign:'center'}}>  Please Register </h1>
         <form onSubmit={handleRegister}>
             <input type="text" name='name' id='' placeholder='Your Name' />
             <input type="email" name='email' id='' placeholder='Your Email' required/>
             <input type="password" name='password' id='' placeholder='Your Password' required/>
             <input type="submit" value="Register" />
         </form>
         <p style={{textAlign:'center'}}>All ready have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please Login </Link></p>

        </div>
    );
};

export default Register;