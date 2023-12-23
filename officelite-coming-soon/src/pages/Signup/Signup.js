import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/shared/logo.svg';
import Countdown from '../../components/Countdown/Countdown';
import SignupForm from '../../components/SignupForm/SignupForm';
import './Signup.css';

export default function Signup() {
  return (
    <div className='signup'>
      <div></div>
      <div className='signup-main'>
        <nav className='signup-nav'>
          <Link to='/'>
            <img src={Logo} alt='Officelite company logo' className='nav-logo' />
          </Link>
        </nav>
        <section className='signup-content'>
          <div>
            <h1 className='signup-title'>Work smarter. Save time.</h1>
            <p className='body signup-lead'>
              Easily manage your projects. Get on the list and recieve in-app perks available only to early subsribers.
              We are moving into final development and getting ready for official launch soon.
            </p>
            <Countdown colour='light' />
          </div>
          <SignupForm />
        </section>
      </div>
      <div className='right-panel'></div>
    </div>
  );
}
