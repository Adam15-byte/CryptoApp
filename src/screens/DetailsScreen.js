import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import COLORS from "../consts/colors";
import { useNavigation } from "@react-navigation/native";
import FavouriteStar from "../components/FavouriteStar";
import PortfolioComponent from "../components/PortfolioComponent";
import StatsComponent from "../components/StatsComponent";
import { Ionicons } from "@expo/vector-icons";

const DetailsScreen = ({ route }) => {
  const {
    name,
    symbol,
    price,
    priceChangePercentage,
    priceChange,
    marketCap,
    icon,
    circulatingSupply,
    maxSupply,
    rank,
    ath,
    athPercentage,
    volume,
  } = route.params;
  const navigation = useNavigation();
  const [isFavourite, changeIsFavourite] = useState(true);
  const calcPercentOfMax = (num1, num2) => {
    const result = ((num1 * 100) / num2).toFixed(0);
    return result;
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topBar}>
        <Ionicons
          style
          name="chevron-back-sharp"
          size={30}
          color={COLORS.black}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.titleTop}>
          <Image style={styles.topIcon} source={{ uri: icon }} />
          <Text style={styles.headerText}>{name}</Text>
        </View>
        <FavouriteStar
          isFavourite={isFavourite}
          onPress={() => changeIsFavourite(!isFavourite)}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.chartPlaceholder} />
      <View style={styles.myPortfolioContainer}>
        <Text style={styles.myPortfolioText}>My portfolio</Text>
        <PortfolioComponent
          icon={icon}
          name={name}
          dolarValue={0.0}
          tokenAmount={0.0}
          ticker={symbol}
        />
      </View>
      <View style={styles.statisticsContainer}>
        <Text style={styles.statsText}>Market stats</Text>
        <StatsComponent
          icon={
            <Ionicons
              name="ios-stats-chart-sharp"
              size={20}
              color={COLORS.blue}
            />
          }
          title="All time high price"
          value={ath}
          subvalue={athPercentage.toFixed(2) + " %"}
        />
        <StatsComponent
          icon={<Ionicons name="md-pie-chart" size={20} color={COLORS.blue} />}
          title="Circulating supply"
          subtitle={
            calcPercentOfMax(circulatingSupply, maxSupply) + "% of max supply"
          }
          value={circulatingSupply}
        />
        <StatsComponent
          icon={<Ionicons name="md-pie-chart" size={20} color={COLORS.blue} />}
          title="Trading Volume"
          subtitle="Last 24h"
          value={volume}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
    width: "100%",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop: 20,
    width: "95%",
  },
  topIcon: { width: 30, height: 30 },
  titleTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.grey,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  chartPlaceholder: {
    width: "100%",
    height: 270,
    backgroundColor: COLORS.grey,
  },
  myPortfolioContainer: {
    width: "100%",
    marginTop: 15,
  },
  myPortfolioText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  statisticsContainer: { width: "100%", marginTop: 15 },
  statsText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});
