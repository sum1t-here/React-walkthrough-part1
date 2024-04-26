import React from 'react';

function Button({ text, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

export default Button;

// use case
<Button text='Click here' onClick={() => console.log('Button clicked')} />;
