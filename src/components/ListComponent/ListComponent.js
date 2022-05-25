import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../consts/colors";
import { styles } from "./ListComponentStyle";

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
            {isPositive(priceChange) ? "+" : ""}
            {priceChange.toFixed(2)} %
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListComponent;
