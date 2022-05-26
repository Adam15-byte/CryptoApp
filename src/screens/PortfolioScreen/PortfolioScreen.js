import { Text, View } from "react-native";
import React from "react";
import { styles } from "./PortfolioScreenStyle";
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../consts/colors";
import { Ionicons } from "@expo/vector-icons";
import dummyCoinData from "../../../assets/data/cryptocurrenciesDummy";
import PortfolioComponent from "../../components/PortfolioComponent/PortfolioComponent";

const PortfolioScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <Ionicons
          style
          name="chevron-back-sharp"
          size={30}
          color={COLORS.black}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}> My portfolio</Text>
        <Ionicons name="add" size={30} color={COLORS.black} />
      </View>
      <View style={styles.separator} />
      <View>
        <PortfolioComponent
          icon={dummyCoinData[0].image}
          name={dummyCoinData[0].name}
          dolarValue={dummyCoinData[0].current_price}
          tokenAmount={1.5}
          ticker={dummyCoinData[0].symbol.toUpperCase()}
        />
      </View>
    </View>
  );
};

export default PortfolioScreen;
