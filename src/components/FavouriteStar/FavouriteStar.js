import { StyleSheet, TouchableOpacity } from "react-native";
import React  from "react";
import { FontAwesome } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import FavouriteStarLogic from "./FavouriteStartLogic";

const FavouriteStar = ({ id }) => {
  const {
    favouritesList,
    addNewFavourite,
    removeFavourite,
    isFavouritesEmpty,
  } = FavouriteStarLogic();
  const isFavourite = isFavouritesEmpty ? null : favouritesList.includes(id);
  return (
    <>
      {isFavourite && (
        <TouchableOpacity
          style={styles.roundBorder}
          onPress={() => {
            removeFavourite(id);
          }}
        >
          <FontAwesome color={COLORS.blue} name="star" size={16} />
        </TouchableOpacity>
      )}
      {!isFavourite && (
        <TouchableOpacity
          style={styles.roundBorder}
          onPress={() => {
            addNewFavourite(id);
          }}
        >
          <FontAwesome name="star-o" size={16} color={COLORS.black} />
        </TouchableOpacity>
      )}
    </>
  );
};

export default FavouriteStar;

const styles = StyleSheet.create({
  roundBorder: {
    width: 35,
    height: 35,
    borderRadius: 30,
    borderWidth: StyleSheet.hairlineWidth,
    color: COLORS.grey,
    alignItems: "center",
    justifyContent: "center",
  },
});
