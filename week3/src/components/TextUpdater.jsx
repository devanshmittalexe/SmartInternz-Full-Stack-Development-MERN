import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="mb-6 p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-3">Text Updater</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
        placeholder="Type something..."
      />
      <p className="mt-2">
        <span className="font-semibold">Output:</span> {text}
      </p>
    </div>
  );
};

export default TextUpdater;