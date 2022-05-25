import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DetailsScreen from "./src/screens/DetailsScreen/DetailsScreen";
import MarketsScreen from "./src/screens/MartketsScreen/MarketsScreen";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MarketsScreen"
        screenOptions={{ headerShown: false, presentation: "modal" }}
      >
        <Stack.Screen name="MarketsScreen" component={MarketsScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
