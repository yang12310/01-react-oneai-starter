import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with ONE-AI System</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos illo distinctio facere maiores perferendis
        pariatur magni tempore dicta earum rerum obcaecati ipsam dolor esse consequuntur, ratione placeat molestiae minus
        dolore.</p>
      <div className="header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      <div className="header-content__people">
        <img src={people} alt={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
    <div className="header-image">
      <img src={ai} />
    </div>
  </div>
);
export default Header;