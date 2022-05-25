import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../consts/colors";
import { styles } from "./DataRangePickerStyles";
import DateRangePickerLogic from "./DateRangePickerLogic";

const DateRangePicker = () => {
  const { changeDateRange, is7days, is14days, is30days, is90days } =
    DateRangePickerLogic();
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
