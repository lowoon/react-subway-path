import React from 'react';

function SearchButton({ onSearchPath }) {
  const onClickSearchButton = e => {
    e.preventDefault();
    onSearchPath();
  }

  return (
    <button
      className="w-full text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800font-bold py-2 px-4 rounded-sm"
      onClick={onClickSearchButton}>
      검색
    </button>
  );
}

export default SearchButton;