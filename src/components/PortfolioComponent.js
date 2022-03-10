import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import COLORS from "../consts/colors";

const PortfolioComponent = ({
  icon,
  name,
  dolarValue,
  tokenAmount,
  ticker,
}) => {
  return (
    <View style={styles.componentContainer}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.dolarText}>{dolarValue.toFixed(2)} $</Text>
        <View style={styles.tokenAmountContainer}>
          <Text style={styles.tokenText}>
            {tokenAmount.toFixed(6)} {ticker}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PortfolioComponent;

const styles = StyleSheet.create({
  componentContainer: {
    flexDirection: "row",
    height: 65,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
  name: {
    fontWeight: "600",
    marginLeft: 10,
  },
  rightContainer: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },
  tokenAmountContainer: {
    flexDirection: "row",
  },
  dolarText: { fontSize: 16 },
  tokenText: { color: COLORS.grey },
});
