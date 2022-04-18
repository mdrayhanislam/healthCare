import React from 'react';
import './Footer.css'
const Footer = () => {
   
      const today = new Date();
      const year = today.getFullYear();
      return (
          <footer className='bg-dark text-center text- mt-5'>
              <p className='para'><small>Copy Right @ {year} </small></p>
          </footer>
    );
};

export default Footer;