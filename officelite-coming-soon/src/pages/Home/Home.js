import React from 'react';
import { Link } from 'react-router-dom';
import PricingCard from '../../components/PricingCard/PricingCard';
import Countdown from '../../components/Countdown/Countdown';
import Logo from '../../assets/shared/logo.svg';
import Illustration from '../../assets/home/illustration-charts.svg';
import BG from '../../assets/home/bg-pattern-header.svg';
import './Home.css';

export default function Home() {
  return (
    <>
      <nav className='nav side-padding'>
        <div className='container nav-container'>
          <Link to='/'>
            <img src={Logo} alt='Officelite company logo' className='nav-logo' />
          </Link>
        </div>
      </nav>
      <main>
        <header className='header side-padding'>
          <img src={BG} alt='Decorative circle illustration' className='header-bg' />
          <div className='container header-container'>
            <div className='header-text'>
              <h1 className='header-title'>A simple solution to complex tasks is coming soon</h1>
              <p className='body header-lead'>
                Say goodbye to inefficient juggling of multiple apps, teams and projects. Officelite is the new
                collaboration platform built with an intuitive interface to improve productivity.
              </p>
              <Link to='/signup' className='btn btn-primary header-btn'>
                Get Started
              </Link>
            </div>
            <img
              src={Illustration}
              alt='Header illustration. Shows a graph, statistics card and typography demonstration which all represent an improve in productivity'
              className='header-img'
            />
          </div>
        </header>
        <section className='pricing-plans side-padding'>
          <div className='container pricing-plans-container'>
            <PricingCard
              planType='Basic'
              price='Free'
              subheading='Up to 5 users for free'
              planFeatures={['Basic document collaboration', '2 GB storage', 'Great security and support']}
            />
            <PricingCard
              planType='Pro'
              price='$9.99'
              subheading='Per user, billed monthly'
              planFeatures={['All essential integrations', '50 GB storage', 'More control and insights']}
              colour='blue'
            />
            <PricingCard
              planType='Ultimate'
              price='$19.99'
              subheading='Per user, billed monthly'
              planFeatures={['Robust work management', '100 GB storage', 'VIP support']}
            />
          </div>
        </section>
      </main>
      <footer className='footer side-padding'>
        <div className='container footer-container'>
          <Countdown />
          <Link to='/signup' className='btn btn-primary footer-btn'>
            Get Started
          </Link>
        </div>
      </footer>
    </>
  );
}
