import React from 'react';
import { Link } from 'react-router-dom';
import './PricingCard.css';

export default function PricingCard({ planType, price, subheading, planFeatures, colour = 'white' }) {
  return (
    <article className={`pricing-card ${colour === 'blue' && 'blue'}`}>
      <header className='pricing-card-top'>
        <h2 className='pricing-card-subtitle'>{planType}</h2>
        <h1 className='strong pricing-card-title'>{price}</h1>
        <p className='body-s pricing-card-lead'>{subheading}</p>
        <Link to='/signup' className={`btn ${colour === 'white' ? 'btn-secondary' : 'btn-tertiary'} tablet-btn`}>
          Try for Free
        </Link>
      </header>
      <div className='pricing-card-bottom'>
        <ul>
          {planFeatures.map((planFeature, index) => {
            return (
              <li className='plan-feature' key={index}>
                {planFeature}
              </li>
            );
          })}
        </ul>
        <Link to='/signup' className={`btn ${colour === 'white' ? 'btn-secondary' : 'btn-tertiary'} desktop-btn`}>
          Try for Free
        </Link>
      </div>
    </article>
  );
}
