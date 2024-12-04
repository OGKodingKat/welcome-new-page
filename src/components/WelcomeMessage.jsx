import React from 'react';

const WelcomeMessage = ({ name }) => {
  return (
    <div>
      {name ? `Hello, ${name}!` : "Please login"}
    </div>
  );
};

export default WelcomeMessage;