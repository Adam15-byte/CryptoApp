import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import COLORS from "../../consts/colors";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import sampleSearchData from "../../../assets/data/sampleSearchData";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { SearchContext } from "../../service/SearchContext";
import { ActivityIndicator, Colors } from "react-native-paper";
import { styles } from "./SearchScreenStyle";

const SearchScreen = () => {
  const navigation = useNavigation();
  const { isLoading, searchResults, getSearchData, getFullTokenData } =
    useContext(SearchContext);
  const renderItem = ({ item }) => (
    <SearchComponent
      image={item.thumb}
      name={item.name}
      ticker={item.symbol}
      onPress={() => {
        getFullTokenData(item.id).then((res) => {
          navigation.navigate("DetailsScreen", {
            id: res[0].id,
            name: res[0].name,
            symbol: res[0].symbol,
            price: res[0].current_price,
            marketCap: res[0].market_cap,
            icon: res[0].image,
            circulatingSupply: res[0].circulating_supply,
            maxSupply: res[0].max_supply,
            rank: res[0].market_cap_rank,
            ath: res[0].ath,
            athPercentage: res[0].ath_change_percentage,
            volume: res[0].total_volume,
          });
        });
      }}
    />
  );
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
        <TextInput
          placeholder="search for cryptocurrencies"
          autoCorrect={false}
          spellCheck={false}
          onChangeText={(text) => getSearchData(text)}
          style={styles.textInputStyle}
        />
        <Feather name="search" size={24} color={COLORS.black} />
      </View>
      <View style={styles.separator} />
      {searchResults ? (
        isLoading ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator
              animating={true}
              color={Colors.red800}
              size="large"
            />
          </View>
        ) : (
          <FlatList data={searchResults} renderItem={renderItem} />
        )
      ) : null}
    </SafeAreaView>
  );
};

export default SearchScreen;
