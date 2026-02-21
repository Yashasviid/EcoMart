import React from 'react';
import './Newsletter.css';
const Newsletter = () => {
  return (
    <div className="newsletter">
  <h1>Get Exclusive Offers</h1>
  <p>Subscribe to our newsletter</p>

  <div className="newsletter-form">
    <input
      className="newsletter-input"
      type="email"
      placeholder="Enter your email"
    />
    <button>Subscribe</button>
  </div>
</div>
  );
}

export default Newsletter;