import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/services">
        <button>Services</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Link to="/services-details">
        <button>Services Details</button>
      </Link>
    </div>
  );
}
