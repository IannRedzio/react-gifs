import React, { useContext } from "react";
import GifsContext from "../context/GifsContext";

export default function useGlobalGifs() {
  const { gifs } = useContext(GifsContext);
  return gifs;
}

// custom hook que devuelve el gif q apretemos del context
