import React, { useState } from 'react';
import StationInput from './StationInput';
import SearchButton from './SearchButton';

function SearchContainer({ searchPathHandler }) {
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const onSourceInputChange = value => {
    setSource(value);
  }

  const onTargetInputChange = value => {
    setTarget(value);
  }

  const onClickSearchPath = () => {
    const sourceInput = source;
    const targetInput = target;
    setSource("");
    setTarget("");
    searchPathHandler(sourceInput, targetInput);
  }

  return (
    <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
      <div className="font-bold text-xl mb-4 text-center">지하철 경로 검색</div>
      <form className="bg-white mb-4">
        <div className="flex flex-wrap mb-3">
          <StationInput onSourceInputChange={onSourceInputChange}
                        placeName="출발역"
                        value={source}/>
          <div className="w-2/12 h-12 text-center text-gray-800 flex justify-center items-center">
            <span className="mdi mdi-arrow-right-thick relative bottom-6px text-lg"/>
          </div>
          <StationInput onSourceInputChange={onTargetInputChange}
                        placeName="도착역"
                        value={target}/>
        </div>
        <SearchButton onSearchPath={onClickSearchPath}/>
      </form>
    </div>
  );
}

export default SearchContainer;