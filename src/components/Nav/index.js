import React from 'react';
import './index.css';

function Nav() {
  return (
    <div className="NavContainer">
      <li className="NavBox">
        <a>Get Pet</a>
      </li>
      <li className="NavBox">
        <a>Give Pet</a>
      </li>
      <li className="NavBox">
        <a>Store</a>
      </li>
    </div>
  );
}

export default Nav;