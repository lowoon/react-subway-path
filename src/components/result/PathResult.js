import React from 'react';
import PathStation from './PathStation';

function PathResult({ updatedResult }) {
  const pathStations = updatedResult.stations;
  const lastIndex = pathStations.length - 1;

  return (
    <>
      <div className="px-2 py-4 border-b">
        <div className="w-full flex mb-3">
          <div className="inline-block w-1/2 border-r text-center">
            <div className="text-gray-600 text-sm">소요시간</div>
            <div>{updatedResult.duration}분</div>
          </div>
          <div className="inline-block w-1/2 text-center">
            <div className="text-gray-600 text-sm">거리</div>
            <div>{updatedResult.distance}km</div>
          </div>
        </div>
      </div>
      <div className="relative pt-3 pb-10">
        <div className="px-2 py-1 w-full flex">
          <div className="w-10/12 inline-block">
            {pathStations.map((pathStation, index) => (
              <PathStation pathStation={pathStation}
                           index={index}
                           lastIndex={lastIndex}
                           key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PathResult;