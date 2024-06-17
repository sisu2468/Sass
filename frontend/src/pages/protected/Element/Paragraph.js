import React from 'react';

const Paragraph = ({ content, onUpdate }) => {
  const handleChange = (e) => {
    onUpdate(e.target.innerText);
  };

  return (
    <p contentEditable onInput={handleChange}>
      {content}
    </p>
  );
};

export default Paragraph;
