import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ListComponent from "../components/ListComponent";
import React from "react";
import COLORS from "../consts/colors";
import dummyCoinData from "../../assets/data/cryptocurrenciesDummy";
import { useNavigation } from "@react-navigation/native";

const MarketsScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <ListComponent
        name={item.name}
        ticker={item.symbol}
        price={item.current_price}
        priceChange={item.price_change_percentage_24h}
        icon={item.image}
        onPress={() =>
          navigation.navigate("DetailsScreen", {
            id: item.id,
            name: item.name,
            symbol: item.symbol,
            price: item.current_price,
            marketCap: item.market_cap,
            icon: item.image,
            circulatingSupply: item.circulating_supply,
            maxSupply: item.max_supply,
            rank: item.market_cap_rank,
            ath: item.ath,
            athPercentage: item.ath_change_percentage,
            volume: item.total_volume,
          })
        }
      />
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topBar}>
        <Octicons name="three-bars" size={24} color="black" />
        <Text style={styles.headerText}>Watchlist</Text>
        <Feather name="search" size={24} color="black" />
      </View>
      <View style={styles.separator} />
      <View>
        <FlatList data={dummyCoinData} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default MarketsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
    width: "100%",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "center",
    marginTop: 20,
    width: "95%",
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
});
