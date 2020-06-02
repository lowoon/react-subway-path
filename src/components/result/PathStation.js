import React from 'react';

function PathStation({ pathStation, index, lastIndex }) {
  return (
    index === 0 || index === lastIndex
      ? <> {index === lastIndex && <span className="mdi mdi-arrow-right-bold text-gray-500"/>}
        <span className="font-bold">{pathStation.name}</span>
      </>
      : <>
        <span className="mdi mdi-arrow-right-bold text-gray-500"/>
        <span className="text-gray-600">{pathStation.name}</span>
      </>
  )
}

export default PathStation;