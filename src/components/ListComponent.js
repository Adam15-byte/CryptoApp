import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../consts/colors";

const ListComponent = ({ name, ticker, price, priceChange, icon, onPress }) => {
  const isPositive = (value) => {
    if (value >= 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.mainContainer}
    >
      <View style={styles.leftContainer}>
        <Image
          source={{
            uri: icon,
          }}
          style={styles.icon}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.coinTitle}>{name}</Text>
          <Text style={styles.coinTicker}>{ticker.toUpperCase()}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{price} $</Text>
          <Text
            style={[
              styles.priceChangeText,
              { color: isPositive(priceChange) ? COLORS.green : COLORS.red },
            ]}
          >
            {isPositive(priceChange) ? "+" : "-"}
            {priceChange.toFixed(2)} %
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    width: "100%",
    height: 65,
    alignItems: "stretch",
    paddingHorizontal: 30,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 32,
    width: 32,
  },
  titleContainer: {
    marginLeft: 10,
    justifyContent: "space-around",
    paddingVertical: 1,
  },
  rightContainer: {
    marginLeft: "auto",
    justifyContent: "space-around",
  },
  priceContainer: {
    alignItems: "flex-end",
    paddingVertical: 1,
  },
  coinTitle: { fontWeight: "bold", fontSize: 16 },
  coinTicker: { color: COLORS.grey, fontSize: 16 },
  priceText: { fontSize: 16 },
  priceChangeText: { fontSize: 16 },
});
