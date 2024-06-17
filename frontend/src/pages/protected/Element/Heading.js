import React from 'react';

const Heading = ({ content, onUpdate }) => {
  const handleChange = (e) => {
    onUpdate(e.target.innerText);
  };

  return (
    <h1 contentEditable onInput={handleChange}>
      {content}
    </h1>
  );
};

export default Heading;
