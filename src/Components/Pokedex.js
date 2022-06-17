import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
const Pokedex = (props) => {
  const { pokemons, loading, page, total_page, setPage } = props;
  const onLeftCLickHandler = () =>  {
    if (page > 0) {
      setPage(page-1)
    }
  }
  const onRightClickHandler = ()=>{
    if (page+1 != total_page) {
      setPage(page+1)
      console.log("deu certo")
    }
  }
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page+1}
          total_page={total_page}
          onLeftCLick={onLeftCLickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando, parça relaxa ai..</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons && pokemons.map((pokemon, index) => {
            return (<Pokemon key={index} pokemon={pokemon}/>)
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
