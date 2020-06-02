import React from 'react';
import PathResult from './PathResult';
import PathType from './PathType';

function ResultContainer({ result, onClickType, hidden }) {
  return (
    <div
      className={"max-w-sm w-full lg:width-350px rounded bg-white shadow-lg p-6 relative border top " + hidden}>
      <button
        className="favorite-button bg-yellow-500 mdi mdi-star-outline absolute text-white bg-transparent d-inline-block font-semibold py-2 px-3 hover:border-transparent rounded-full z-10"
      >
      </button>
      <ul className="flex border-b w-full">
        <PathType type="DISTANCE"
                  onClickType={onClickType}
                  name="최단거리"/>
        <PathType type="DURATION"
                  onClickType={onClickType}
                  name="최소시간"/>
      </ul>
      <PathResult updatedResult={result}/>
    </div>
  );
}

export default ResultContainer;