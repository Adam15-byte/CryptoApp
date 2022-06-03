import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CryptoCurrencyDataContext = createContext();

export const CryptoCurrencyDataContextProvider = ({ children }) => {
  const [favouritesList, setFavouritesList] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFavouritesEmpty = favouritesList.length === 0 ? true : false;

  ////
  // Convert list of of Favourites to one long string
  ////
  const getStringListOfFavourites = () => {
    if (favouritesList.length === 0) {
      return null;
    } else {
      setIsLoading(true);
      var concString = "";
      favouritesList.map((element, index) => {
        if (index === 0 && element.length > 1)
          concString = (concString + element).toString();
        if (index !== 0 && element.length > 1)
          concString = (concString + "%2C%20" + element).toString();
      });
      return concString;
    }
  };

  ////
  // retireve Watchlist data for Markets Screen based on favouritesList
  ////
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

  ////
  // Manage favourites array state
  ////
  const addNewFavourite = (id) => {
    setFavouritesList((currentList) => [...currentList, id]);
  };

  const removeFavourite = async (id) => {
    const newFavourites = favouritesList.filter((x) => x !== id);
    await setFavouritesList((prevState) => newFavourites);
  };

  ////
  // Favourites save and load state from device memory
  ////
  const saveFavouritesToMemory = async () => {
    try {
      const jsonValue = JSON.stringify(favouritesList);
      await AsyncStorage.setItem("@cryptoWatchlist", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavouritesFromMemory = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@cryptoWatchlist");
      const watchlistData = JSON.parse(jsonValue);
      setFavouritesList((prevState) => watchlistData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFavouritesFromMemory();
  }, []);

  useEffect(() => {
    saveFavouritesToMemory();
  }, [favouritesList]);

  ////
  // On every change of favouritesList load data of cryptos on watchlist (in Markets Screen)
  ////
  useEffect(() => {
    if (favouritesList.length === 0) {
      return null;
    } else {
      getCryptoData(getStringListOfFavourites());
    }
  }, [favouritesList]);

  return (
    <CryptoCurrencyDataContext.Provider
      value={{
        cryptoData,
        isLoading,
        getCryptoData: getCryptoData,
        getStringListOfFavourites: getStringListOfFavourites,
        favouritesList,
        addNewFavourite,
        removeFavourite,
        isFavouritesEmpty,
      }}
    >
      {children}
    </CryptoCurrencyDataContext.Provider>
  );
};;
