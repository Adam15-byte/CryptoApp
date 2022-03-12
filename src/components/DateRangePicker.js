import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { PriceDataContext } from "../service/PriceDataContext";
import COLORS from "../consts/colors";

const DateRangePicker = () => {
  const { changeDateRange, dayRange } = useContext(PriceDataContext);
  const is7days = dayRange === 7 ? true : false;
  const is14days = dayRange === 14 ? true : false;
  const is30days = dayRange === 30 ? true : false;
  const is90days = dayRange === 90 ? true : false;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: is7days ? COLORS.lightgrey : COLORS.white },
        ]}
        onPress={() => {
          changeDateRange(7);
        }}
      >
        <Text>7D</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: is14days ? COLORS.lightgrey : COLORS.white },
        ]}
        onPress={() => changeDateRange(14)}
      >
        <Text>14D</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: is30days ? COLORS.lightgrey : COLORS.white },
        ]}
        onPress={() => changeDateRange(30)}
      >
        <Text>1M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: is90days ? COLORS.lightgrey : COLORS.white },
        ]}
        onPress={() => changeDateRange(90)}
      >
        <Text>3M</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateRangePicker;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginTop: 13,
    marginBottom: 3,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    padding: 5,
    borderRadius: 10,
  },
});
