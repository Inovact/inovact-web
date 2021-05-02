import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../../assets/img/logo.png';

import  './styles.css';
const NavBar =()=>{
    window.addEventListener('scroll', function () {
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
      });
    
      function toggle() {
        let header = document.querySelector('header');
        header.classList.toggle('active');
      }
return (
  <>
    <header>
      
    <Link to='/' className='logo'>
       <img src={logo} alt="Logo" width="60" height="60px" style={{position:'relative',top:'10px'}}/>
        <span className="logoname" >Inovact</span>
    </Link>
    
    <ul>
      <li>
        <a href='#home' onClick={toggle}>
          Home
        </a>
      </li>
      <li>
        <a href='#about' onClick={toggle}>
          About
        </a>
      </li>
      <li>
        <a href='#services' onClick={toggle}>
          Services
        </a>
      </li>
      <li>
        <a href='#testimonial' onClick={toggle}>
          Testimonials
        </a>
      </li>
      <li>
        <a href='#contact' onClick={toggle}>
          Contact
        </a>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <a href='#home'>SignUp</a>
      </li>
    </ul>
    <div className='toggle' onClick={toggle} />
  </header>

    </>
); 
}
export default NavBar;