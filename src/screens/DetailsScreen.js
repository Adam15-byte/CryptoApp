import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import COLORS from "../consts/colors";
import { useNavigation } from "@react-navigation/native";
import FavouriteStar from "../components/FavouriteStar";
import PortfolioComponent from "../components/PortfolioComponent";
import StatsComponent from "../components/StatsComponent";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import pricesSample from "../../assets/data/pricesSampleData";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
  ChartXLabel,
} from "@rainbow-me/animated-charts";
import { PriceDataContext } from "../service/PriceDataContext";
import DateRangePicker from "../components/DateRangePicker";

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
  const { isLoading, priceData, getPriceData, dayRange } =
    useContext(PriceDataContext);
  const navigation = useNavigation();
  const [isFavourite, changeIsFavourite] = useState(true);
  const calcPercentOfMax = (num1, num2) => {
    const result = ((num1 * 100) / num2).toFixed(0);
    return result;
  };
  const shortenLargeNumber = (number) => {
    if (number > 1_000_000_000_000) {
      return (number / 1_000_000_000_000).toFixed(2) + " T";
    } else if (number > 1_000_000_000) {
      return (number / 1_000_000_000).toFixed(2) + " B";
    } else if (number > 1_000_000) {
      return (number / 1_000_000).toFixed(2) + " M";
    }
  };
  const { width: SIZE } = Dimensions.get("window");
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
  const formatTimestamp = (timestamp) => {
    "worklet";
    var date = new Date(timestamp * 1);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };
  const formatDate = (value) => {
    "worklet";
    if (value === "") {
      return `${formatTimestamp(priceData[priceData.length - 1][0])}`;
    } else {
      return `${formatTimestamp(value)}`;
    }
  };

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
  rankingContainer: {
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginLeft: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  rankingText: {
    color: COLORS.white,
    padding: 3,
    fontSize: 12,
    fontWeight: "600",
  },
  priceText: {
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 1,
  },
  dateText: {
    letterSpacing: 1,
    fontWeight: "700",
  },
  priceDataBar: {
    marginLeft: 10,
  },
  activityIndicator: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
