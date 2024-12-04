import React from 'react';
import WelcomeMessage from '../components/WelcomeMessage';

const About = () => {
  let name = "Kat Marie";

  return (
    <div>
      <h1>About Page</h1>
      <WelcomeMessage name={name} />
    </div>
  );
};

export default About;
