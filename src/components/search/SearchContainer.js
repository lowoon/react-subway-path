import React, { useReducer } from 'react';
import StationInput from './StationInput';
import SearchButton from './SearchButton';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function SearchContainer({ searchPathHandler }) {
  const [state, dispatch] = useReducer(reducer, {
    source: '',
    target: ''
  });

  const { source, target } = state;

  const onInputChange = event => {
    dispatch(event.target)
  }

  const onClickSearchPath = () => {
    searchPathHandler(source, target);
    state.source = ''
    state.target = ''
  }

  return (
    <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
      <div className="font-bold text-xl mb-4 text-center">지하철 경로 검색</div>
      <form className="bg-white mb-4">
        <div className="flex flex-wrap mb-3">
          <StationInput onInputChange={onInputChange}
                        placeName="출발역"
                        value={source}
                        name="source"/>
          <div className="w-2/12 h-12 text-center text-gray-800 flex justify-center items-center">
            <span className="mdi mdi-arrow-right-thick relative bottom-6px text-lg"/>
          </div>
          <StationInput onInputChange={onInputChange}
                        placeName="도착역"
                        value={target}
                        name="target"/>
        </div>
        <SearchButton onSearchPath={onClickSearchPath}/>
      </form>
    </div>
  );
}

export default SearchContainer;