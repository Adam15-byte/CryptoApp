import { Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { PriceDataContext } from "../../service/PriceDataContext";
import { useNavigation } from "@react-navigation/native";
import PortfolioContext from "../../service/PortfolioContext";

const DetailsScreenLogic = () => {
  const shortenLargeNumber = (number) => {
    if (number > 1_000_000_000_000) {
      return (number / 1_000_000_000_000).toFixed(2) + " T";
    } else if (number > 1_000_000_000) {
      return (number / 1_000_000_000).toFixed(2) + " B";
    } else if (number > 1_000_000) {
      return (number / 1_000_000).toFixed(2) + " M";
    }
  };
  const { isLoading, priceData, getPriceData, dayRange } =
    useContext(PriceDataContext);
  const {
    modalVisibility,
    changeModalVisibility,
    changeAmountModalVisibility,
    portfolio,
  } = useContext(PortfolioContext);
  const navigation = useNavigation();
  const calcPercentOfMax = (num1, num2) => {
    const result = ((num1 * 100) / num2).toFixed(0);
    return result;
  };

  const formatTimestamp = (timestamp) => {
    "worklet";
    var date = new Date(timestamp * 1);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };
  const formatDate = (value) => {
    "worklet";
    if (value === "") {
      return `${formatTimestamp(priceData[priceData.length - 1][0])}`;
    } else {
      return `${formatTimestamp(value)}`;
    }
  };
  return {
    shortenLargeNumber,
    isLoading,
    priceData,
    getPriceData,
    dayRange,
    navigation,
    formatDate,
    calcPercentOfMax,
    modalVisibility,
    changeModalVisibility,
    changeAmountModalVisibility,
    portfolio,
  };
};

export default DetailsScreenLogic;
