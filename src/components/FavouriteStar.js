import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import COLORS from "../consts/colors";

const FavouriteStar = ({ isFavourite = true, onPress }) => {
  return (
    <TouchableOpacity style={styles.roundBorder} onPress={onPress}>
      {isFavourite && <FontAwesome color={COLORS.blue} name="star" size={16} />}
      {!isFavourite && (
        <FontAwesome name="star-o" size={16} color={COLORS.black} />
      )}
    </TouchableOpacity>
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
