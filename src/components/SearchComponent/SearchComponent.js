import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./SearchComponentStyle";

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
