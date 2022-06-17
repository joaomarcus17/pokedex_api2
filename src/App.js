import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import { getPokemonData, getPokemons } from "./api";

function App() {
  const [page, setPage] = useState(0);
  const [total_page, setTotal_page] = useState(0);
  const [loanding, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  
  
  const itensPerPage = 20
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal_page(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <NavBar />
      <Pokedex
        pokemons={pokemons}
        loanding={loanding}
        page={page}
        setPage={setPage}
        total_page={total_page}
      />
    </div>
  );
}

export default App;
