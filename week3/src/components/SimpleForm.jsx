import React, { useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue('');
  };

  return (
    <div className="mb-6 p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-3">Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          placeholder="Enter text..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;