import React from 'react';

type ButtonProp = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CustButton = ({ onClick, text }: ButtonProp) => {
  return (
    <button
      className='p-4 bg-red-500 rounded-2xl w-20 m-5 text-center text-white'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustButton;
