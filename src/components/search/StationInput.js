import React from 'react';

function StationInput({ onSourceInputChange, placeName, value }) {
  const inputChange = e => {
    const updatedValue = e.target.value;
    onSourceInputChange(updatedValue);
  }

  return (
    <div className="w-5/12 h-12 text-center text-gray-800">
      <input
        className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        type="text"
        value={value}
        placeholder={placeName}
        onChange={inputChange}
      />
    </div>
  );
}

export default StationInput;