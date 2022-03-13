import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import COLORS from "../consts/colors";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import sampleSearchData from "../../assets/data/sampleSearchData";
import SearchComponent from "../components/SearchComponent";

const SearchScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <SearchComponent
      id={item.id}
      image={item.thumb}
      name={item.name}
      ticker={item.symbol}
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
          onChangeText={(text) => {}}
          style={styles.textInputStyle}
        />
        <Feather name="search" size={24} color={COLORS.black} />
      </View>
      <View style={styles.separator} />
      <FlatList data={sampleSearchData} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default SearchScreen;

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
  textInputStyle: {
    width: "70%",
  },
});
