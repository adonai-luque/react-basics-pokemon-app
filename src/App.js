import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [nextPageUrl, setNextPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    setTimeout(() => {
      axios
        .get(currentPageUrl, {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        .then((res) => {
          setLoading(false);
          setPrevPageUrl(res.data.previous);
          setNextPageUrl(res.data.next);
          setPokemons(res.data.results.map((p) => p.name));
        });
    }, 50);
    return () => cancel();
  }, [currentPageUrl]);

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };
  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  if (loading) return <div className="loading">Loading...</div>;
  return (
    <>
      <PokemonList pokemons={pokemons} />
      <Pagination
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
      />
    </>
  );
}

export default App;
