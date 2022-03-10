import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import COLORS from "../consts/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FavouriteStar from "../components/FavouriteStar";

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
  } = route.params;
  const navigation = useNavigation();
  const [isFavourite, changeIsFavourite] = useState(true);
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
});
