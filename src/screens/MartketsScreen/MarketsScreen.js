import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ListC, { useContext, useEffect } from "react";
import COLORS from "../../consts/colors";
import dummyCoinData from "../../../assets/data/cryptocurrenciesDummy";
import { useNavigation } from "@react-navigation/native";
import ListComponent from "../../components/ListComponent/ListComponent";
import { CryptoCurrencyDataContext } from "../../service/CryptoCurrencyDataContext";
import { ActivityIndicator, Colors } from "react-native-paper";
import { styles } from "./MartkesScreenStyle";
import { FontAwesome } from "@expo/vector-icons";

const MarketsScreen = () => {
  const navigation = useNavigation();
  const {
    getCryptoData,
    isLoading,
    cryptoData,
    getStringListOfFavourites,
    favouritesList,
    isFavouritesEmpty,
  } = useContext(CryptoCurrencyDataContext);
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
        <TouchableOpacity
          style={styles.portfolioButtonContainer}
          onPress={() => navigation.navigate("PortfolioScreen")}
        >
          <FontAwesome name="money" size={24} color={COLORS.black} />
          <Text style={styles.myPortfolioText}>My portfolio</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>Watchlist</Text>
        <Feather
          name="search"
          size={24}
          color="black"
          onPress={() => navigation.navigate("SearchScreen")}
        />
      </View>
      <View style={styles.separator} />
      {/* {isLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator
            animating={true}
            color={Colors.red800}
            size="large"
          />
        </View>
      )} */}
      {/* {!isLoading && ( */}
      <View>
        <FlatList data={dummyCoinData} renderItem={renderItem} />
      </View>
      {/* )} */}
    </SafeAreaView>
  );
};

export default MarketsScreen;
