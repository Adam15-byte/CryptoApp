import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import { styles } from "./StatsComponentStyle";

const StatsComponent = ({ icon, title, subtitle, value, subvalue }) => {
  const isLargerThanZero = (value) => {
    if (value > 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        {icon}
        <View style={styles.leftTextContainer}>
          <Text>{title}</Text>
          {subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text>{value}</Text>
        {subvalue && (
          <Text
            style={[
              styles.subtitleText,
              { color: isLargerThanZero(subvalue) ? COLORS.green : COLORS.red },
            ]}
          >
            {subvalue}
          </Text>
        )}
      </View>
    </View>
  );
};

export default StatsComponent;
