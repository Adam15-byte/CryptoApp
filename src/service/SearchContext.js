import React, { createContext, useState } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const getSearchData = async (input) => {
    setIsLoading(true);
    try {
      await axios
        .get(`https://api.coingecko.com/api/v3/search?query=${input}`)
        .then((res) => {
          const database = res.data;
          setSearchResults(database.coins);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getFullTokenData = async (token) => {
    let data;
    try {
      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${token}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        )
        .then((res) => {
          const database = res.data;
          data = database;
        });
    } catch (error) {
      console.log(error);
    }
    return data;
  };

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        isLoading,
        getSearchData: getSearchData,
        getFullTokenData: getFullTokenData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
