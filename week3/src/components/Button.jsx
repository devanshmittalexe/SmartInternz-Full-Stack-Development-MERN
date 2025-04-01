import React from 'react';

const Button = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-3">Button Component</h2>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Click Me
      </button>
    </div>
  );
};

export default Button;