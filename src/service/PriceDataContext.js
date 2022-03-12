import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
import axios from "axios";

export const PriceDataContext = createContext();

export const PriceDataContextProvider = ({ children }) => {
  const [priceData, setPriceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dayRange, setDayRange] = useState(30);
  const getPriceData = async (token) => {
    setIsLoading(true);
    try {
      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${token}/market_chart?vs_currency=usd&days=${dayRange}&interval=daily`
        )
        .then((res) => {
          const database = res.data;
          setPriceData(database.prices);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const changeDateRange = (value) => {
    setDayRange(value);
  };
  return (
    <PriceDataContext.Provider
      value={{
        isLoading,
        priceData,
        getPriceData: getPriceData,
        dayRange,
        changeDateRange: changeDateRange,
      }}
    >
      {children}
    </PriceDataContext.Provider>
  );
};
