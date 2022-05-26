import { Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./PortfolioComponentStyle";

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
            {tokenAmount < 0
              ? tokenAmount.toFixed(2) + " " + ticker
              : tokenAmount.toFixed(0) + " " + ticker}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PortfolioComponent;
