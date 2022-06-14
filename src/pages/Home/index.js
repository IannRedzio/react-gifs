import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs/index";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["Matrix", "Gon", "Killua", "Naruto"];

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault(); // esto hace que no se refrezque la pagina cada vez que apretemos enter al input
    // se va ejecutar cuando hagamos submit del formulario
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    // se va ejecutar cada vez que hagamos cambios en el input
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Seach a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <input type="submit" value="Buscar" />
      </form>
      <h3 className="App-title">Ultima busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
