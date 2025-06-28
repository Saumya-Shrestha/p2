import React from 'react';

const Button = ({ mode, text }) => {
  return (
    <>
      <button className={`btn btn-${mode === 'light' ? 'dark' : 'light'}`}>{text}</button>
    </>
  );
};

export default Button;
