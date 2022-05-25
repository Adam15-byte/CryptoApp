import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { PriceDataContext } from "../../service/PriceDataContext";

const DateRangePickerLogic = () => {
  const { changeDateRange, dayRange } = useContext(PriceDataContext);
  const is7days = dayRange === 7 ? true : false;
  const is14days = dayRange === 14 ? true : false;
  const is30days = dayRange === 30 ? true : false;
  const is90days = dayRange === 90 ? true : false;
  return {
    changeDateRange,
    is7days,
    is14days,
    is30days,
    is90days,
  };
};

export default DateRangePickerLogic;
