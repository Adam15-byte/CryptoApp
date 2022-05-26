import {
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import COLORS from "../../consts/colors";
import FavouriteStar from "../../components/FavouriteStar/FavouriteStar";
import PortfolioComponent from "../../components/PortfolioComponent/PortfolioComponent";
import StatsComponent from "../../components/StatsComponent/StatsComponent";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
  ChartXLabel,
} from "@rainbow-me/animated-charts";
import DateRangePicker from "../../components/DataRangePicker/DateRangePicker";
import { styles } from "./DetailsScreenStyle";
import DetailsScreenLogic from "./DetailsScreenLogic";
import { PriceDataContext } from "../../service/PriceDataContext";
const { width: SIZE } = Dimensions.get("window");
import AddToPortfolio from "../../components/AddToPortfolio/AddToPortfolio";

const DetailsScreen = ({ route }) => {
  const {
    id,
    name,
    symbol,
    price,
    marketCap,
    icon,
    circulatingSupply,
    maxSupply,
    rank,
    ath,
    athPercentage,
    volume,
  } = route.params;
  const {
    shortenLargeNumber,
    isLoading,
    priceData,
    dayRange,
    navigation,
    formatDate,
    calcPercentOfMax,
    modalVisibility,
    changeModalVisibility,
  } = DetailsScreenLogic();
  const formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      if (price < 0.1) {
        return `$ ${price.toFixed(12).toString()}`;
      } else {
        return `$ ${price.toFixed(2).toString()}`;
      }
    } else {
      if (parseFloat(value).toFixed(1) < 0.1) {
        return `$ ${parseFloat(value).toFixed(12)}`;
      } else {
        return `$ ${parseFloat(value).toFixed(2)}`;
      }
    }
  };
  const { getPriceData } = useContext(PriceDataContext);
  useEffect(() => {
    getPriceData(id);
  }, [dayRange]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator
            animating={true}
            color={Colors.red800}
            size="large"
          />
        </View>
      )}
      {!isLoading && (
        <ChartPathProvider
          data={{
            points: priceData.map((data) => ({ x: data[0], y: data[1] })),
            smoothingStrategy: "bezier",
          }}
        >
          <AddToPortfolio icon={icon} name={name} symbol={symbol} />
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
              <View style={styles.rankingContainer}>
                <Text style={styles.rankingText}>#{rank}</Text>
              </View>
            </View>
            <FavouriteStar id={id} />
          </View>
          <View style={styles.separator} />
          <View style={styles.priceDataBar}>
            <ChartXLabel format={formatDate} style={styles.dateText} />
            <ChartYLabel format={formatCurrency} style={styles.priceText} />
          </View>
          <View>
            <ChartPath
              height={SIZE / 2}
              stroke={COLORS.black}
              width={SIZE}
              strokeWidth={2}
            />
            <ChartDot style={{ backgroundColor: COLORS.black }} />
            <DateRangePicker />
          </View>

          <View style={styles.myPortfolioContainer}>
            <View style={styles.myPortfolioHeader}>
              <Text style={styles.myPortfolioText}>My portfolio</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={changeModalVisibility}
              >
                <Ionicons name="add" size={20} color={COLORS.white} />
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
            </View>
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
              value={ath.toFixed(2) + " $"}
              subvalue={athPercentage.toFixed(2) + " %"}
            />
            <StatsComponent
              icon={
                <Ionicons name="md-pie-chart" size={20} color={COLORS.blue} />
              }
              title="Circulating supply"
              subtitle={
                calcPercentOfMax(circulatingSupply, maxSupply) +
                "% of max supply"
              }
              value={shortenLargeNumber(circulatingSupply)}
            />
            <StatsComponent
              icon={
                <FontAwesome name="line-chart" size={20} color={COLORS.blue} />
              }
              title="Trading Volume"
              subtitle="Last 24h"
              value={shortenLargeNumber(volume) + " $"}
            />
            <StatsComponent
              icon={
                <FontAwesome name="bar-chart" size={20} color={COLORS.blue} />
              }
              title="Market Capitalization"
              value={shortenLargeNumber(marketCap) + " $"}
            />
          </View>
        </ChartPathProvider>
      )}
    </SafeAreaView>
  );
};

export default DetailsScreen;
