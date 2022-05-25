import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { CryptoCurrencyDataContext } from "../../service/CryptoCurrencyDataContext";

const FavouriteStarLogic = () => {
  const {
    favouritesList,
    addNewFavourite,
    removeFavourite,
    getStringListOfFavourites,
    getCryptoData,
  } = useContext(CryptoCurrencyDataContext);
  const isFavouritesEmpty = favouritesList === null ? true : false;
  return {
    favouritesList,
    addNewFavourite,
    removeFavourite,
    getStringListOfFavourites,
    getCryptoData,
    isFavouritesEmpty,
  };
};

export default FavouriteStarLogic;

const styles = StyleSheet.create({});
