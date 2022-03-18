import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const SearchComponent = ({ image, name, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.componentContainer}
    >
      <View style={styles.leftContainer}>
        <Image source={{ uri: image }} style={styles.icon} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.rightContainer}></View>
    </TouchableOpacity>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  componentContainer: {
    flexDirection: "row",
    height: 65,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
  name: {
    fontWeight: "600",
    marginLeft: 10,
  },
  rightContainer: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },
});
