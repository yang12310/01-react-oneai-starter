import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improve customer satisfaction',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea rationelaudantium, in, blanditiis placeat odit aliquid non excepturi consequuntur maxime.',
  },
  {
    title: 'Actively respond to market changes',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea rationelaudantium, in, blanditiis placeat odit aliquid non excepturi consequuntur maxime.',
  },
  {
    title: 'Creating a vision for the future',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea rationelaudantium, in, blanditiis placeat odit aliquid non excepturi consequuntur maxime.',
  },
  {
    title: 'Maximize revenue generation',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea rationelaudantium, in, blanditiis placeat odit aliquid non excepturi consequuntur maxime.',
  },
];

const Features = () => (
  <div className="features section__padding" id="features">
    <div className="features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make
        it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);
export default Features