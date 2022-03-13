import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
import axios from "axios";

export const CryptoCurrencyDataContext = createContext();

export const CryptoCurrencyDataContextProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [favouritesList, setFavouritesList] = useState([
    "bitcoin",
    "cardano",
    "avalanche-2",
  ]);
  const [favouritesString, setFavouritesString] = useState("bitcoin");
  const getStringListOfFavourites = async () => {
    setIsLoading(true);
    var concString = "";
    await favouritesList.map((element, index) => {
      if (index === 0) {
        concString = (concString + element).toString();
      } else {
        concString = (concString + "%2C%20" + element).toString();
      }
    });
    setFavouritesString(concString);
    return concString;
  };

  const getCryptoData = async (coinsList) => {
    setIsLoading(true);
    try {
      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinsList}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        )
        .then((res) => {
          const database = res.data;
          setCryptoData(database);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CryptoCurrencyDataContext.Provider
      value={{
        cryptoData,
        isLoading,
        getCryptoData: getCryptoData,
        getStringListOfFavourites: getStringListOfFavourites,
      }}
    >
      {children}
    </CryptoCurrencyDataContext.Provider>
  );
};
