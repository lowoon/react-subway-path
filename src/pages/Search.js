import React, { useEffect, useState } from "react";
import axios from 'axios';

import "../assets/service/css/search.css";
import SearchContainer from '../components/search/SearchContainer';
import ResultContainer from '../components/result/ResultContainer';

const Search = props => {
  const [result, setResult] = useState({
    stations: [],
    distance: null,
    duration: null
  });
  const [hidden, setHidden] = useState("hidden");
  const [type, setType] = useState("DISTANCE");
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const onClickTypeHandler = (type) => {
    setType(type);
  }

  const searchPathHandler = (source, target) => {
    const path = "/paths";
    setTarget(target);
    setSource(source);
    axios.get(path, {
      params: {
        source: source,
        target: target,
        type: type
      }
    })
    .then(res => res.data)
    .then(data => {
      setResult(data);
    });
    setHidden("");
  }

  useEffect(() => {
    const shortestPath = () => {
      const path = "/paths";
      axios.get(path, {
        params: {
          source: source,
          target: target,
          type: type
        }
      })
      .then(res => res.data)
      .then(data => {
        setResult(data);
      });
    }
    shortestPath();
  }, [type])

  return (
    <>
      <SearchContainer searchPathHandler={searchPathHandler}/>
      <ResultContainer result={result}
                       onClickType={onClickTypeHandler}
                       hidden={hidden}/>
    </>
  )
};

export default Search;
