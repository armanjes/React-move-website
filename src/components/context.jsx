/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const apiKey = import.meta.env.VITE_API_KEY;
export const api = `http://www.omdbapi.com/?apikey=${apiKey}`;

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Tom and Jerry");
  const getMovies = async (api) => {
    try {
      let res = await fetch(api);
      let data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let setTimer = setTimeout(() => {
      getMovies(`${api}&s=${query}`);
    }, 800);

    return () => clearTimeout(setTimer)
  }, [query]);

  return (
    <AppContext.Provider value={{ movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalState };
