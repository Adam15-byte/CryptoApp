import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../consts/colors";

const StatsComponent = ({ icon, title, subtitle, value, subvalue }) => {
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
        {subvalue && <Text style={styles.subtitleText}>{subvalue}</Text>}
      </View>
    </View>
  );
};

export default StatsComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    height: 65,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  leftContainer: { flexDirection: "row", alignItems: "center" },
  leftTextContainer: {
    marginLeft: 10,
    paddingVertical: 13,
    justifyContent: "space-around",
    height: "100%",
  },
  rightContainer: {
    marginLeft: "auto",
    alignItems: "flex-end",
    paddingVertical: 13,
    justifyContent: "space-around",
    height: "100%",
  },
  subtitleText: {
    color: COLORS.grey,
    fontSize: 13,
  },
});
