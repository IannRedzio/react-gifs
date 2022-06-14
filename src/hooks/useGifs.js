import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifsContext";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(
    function () {
      setLoading(true);
      // recuperamos la keyword del localStorage
      const keywordToUse = keyword || localStorage.getItem("lastKeyword");
      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        // guardo la keyword en el localstorage
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, setGifs]
  );

  return { loading, gifs };
}
