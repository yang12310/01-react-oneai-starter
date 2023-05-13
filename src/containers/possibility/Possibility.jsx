import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="possibility section__padding" id="possibility">
    <div className="possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum, autem tempora corporis adipisci ut
        numquam cum soluta aliquam. Obcaecati, est? Ad, sed! Quibusdam, obcaecati accusantium repudiandae porro architecto
        rerum.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);
export default Possibility;