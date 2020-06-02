import React from 'react';

function PathType({ type, onClickType, name }) {
  const onClickPathType = () => {
    onClickType(type);
  }

  return (
    <li className="-mb-px w-2/4 tab-menu">
      <button onClick={onClickPathType}
              className="w-full text-center inline-block py-2 px-4 font-semibold">{name}</button>
    </li>
  );
}

export default PathType;