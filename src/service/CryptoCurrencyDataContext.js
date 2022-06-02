import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CryptoCurrencyDataContext = createContext();

export const CryptoCurrencyDataContextProvider = ({ children }) => {
  const [favouritesList, setFavouritesList] = useState(null);
  const [cryptoData, setCryptoData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const isFavouritesEmpty = favouritesList === null ? true : false;
  const getStringListOfFavourites = async () => {
    if (isFavouritesEmpty) {
      return null;
    } else {
      setIsLoading(true);
      var concString = "";
      await favouritesList.map((element, index) => {
        if (index === 0) {
          concString = (concString + element).toString();
        } else {
          concString = (concString + "%2C%20" + element).toString();
        }
      });
      return concString;
    }
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
          setCryptoData((prevState) => database);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addNewFavourite = (id) => {
    if (isFavouritesEmpty) {
      setFavouritesList((prevState) => id);
    } else {
      setFavouritesList((currentList) => [...currentList, id]);
    }
  };

  const removeFavourite = async (id) => {
    const newFavourites = favouritesList.filter((x) => x !== id);
    await setFavouritesList((prevState) => newFavourites);
  };

  const saveFavouritesToMemory = async () => {
    try {
      const jsonValue = JSON.stringify(favouritesList);
      await AsyncStorage.setItem("@cryptoWatchlist", jsonValue);
      console.log("Async saved data");
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavouritesFromMemory = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@cryptoWatchlist");
      const watchlistData = JSON.parse(jsonValue);
      setFavouritesList((prevState) => watchlistData);
      console.log(favouritesList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFavouritesFromMemory();
  }, []);
  useEffect(() => {
    if (isFavouritesEmpty) {
      return null;
    } else {
      getStringListOfFavourites().then((res) => getCryptoData(res));
    }
  }, [favouritesList]);
  useEffect(() => {
    saveFavouritesToMemory();
  }, [favouritesList]);

  return (
    <CryptoCurrencyDataContext.Provider
      value={{
        cryptoData,
        isLoading,
        getCryptoData: getCryptoData,
        getStringListOfFavourites: getStringListOfFavourites,
        favouritesList,
        addNewFavourite: addNewFavourite,
        removeFavourite: removeFavourite,
        isFavouritesEmpty,
      }}
    >
      {children}
    </CryptoCurrencyDataContext.Provider>
  );
};
