import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styles } from "./PortfolioComponentStyle";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import PortfolioContext from "../../service/PortfolioContext";

const PortfolioComponent = ({
  id, 
  icon,
  name,
  dolarValue,
  tokenAmount,
  ticker,
}) => {
  const { changeChangeAmountModalVisibility } = useContext(PortfolioContext);
  return (
    <View style={styles.componentContainer}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons
          name="create-sharp"
          size={24}
          color={COLORS.black}
          onPress={() => {
            changeChangeAmountModalVisibility(
              id,
              icon,
              name,
              tokenAmount,
              ticker
            );
          }}
        />
        <View style={styles.amountsContainer}>
          <Text style={styles.dolarText}>
            {dolarValue ? dolarValue.toFixed(2) : 0} $
          </Text>
          <View style={styles.tokenAmountContainer}>
            <Text style={styles.tokenText}>
              {tokenAmount < 0
                ? tokenAmount.toFixed(2) + " " + ticker.toUpperCase()
                : tokenAmount.toFixed(0) + " " + ticker.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PortfolioComponent;
