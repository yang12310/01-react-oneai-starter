import React from 'react';
import Feature from '../../components/feature/Feature';
import './oneAi.css';

const OneAi = () => (
  <div className="whatoneai section__margin" id="oneai">
    <div className="feature">
      <Feature title="What is ONE-AI" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum
        placeat ea pariatur quibusdam commodi aliquid at omnis consectetur qui distinctio, ducimus reprehenderit? At aliquam
        veniam odio voluptate aut impedit pariatur eos corporis. Facere deleniti commodi quae consectetur placeat suscipit!" />
    </div>
    <div className="heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="container">
      <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea itaque,
        psum dolor siut suscipit voluptatem explicabo." />
      <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea ipsum
        dolor sitaque, ut suscipit voluptatem explicabo." />
      <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eapsum dolor
        si itaque, ut suscipit voluptatem explicabo." />
    </div>
  </div>
);
export default OneAi;