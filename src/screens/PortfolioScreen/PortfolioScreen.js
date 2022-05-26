import { Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styles } from "./PortfolioScreenStyle";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../consts/colors";
import { Ionicons } from "@expo/vector-icons";
import dummyCoinData from "../../../assets/data/cryptocurrenciesDummy";
import PortfolioComponent from "../../components/PortfolioComponent/PortfolioComponent";
import PortfolioContext from "../../service/PortfolioContext";

const PortfolioScreen = () => {
  const navigation = useNavigation();
  const { portfolio, totalEvaluation } = useContext(PortfolioContext);
  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <Ionicons
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
        {portfolio.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() => {
              console.log("pressed ");
            }}
          >
            <PortfolioComponent
              icon={item.icon}
              name={item.name}
              dolarValue={item.dolarValue}
              tokenAmount={item.amount}
              ticker={item.symbol}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bottomSeparator} />
      <View style={styles.bottomTabWithSummary}>
        <Text style={styles.summaryTitle}>Total portfolio evaluation:</Text>
        <Text style={styles.summeryValue}>{totalEvaluation.toFixed(2)} $</Text>
      </View>
    </View>
  );
};

export default PortfolioScreen;
