import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import { PriceDataContextProvider } from "./src/service/PriceDataContext";

export default function App() {
  return (
    <PriceDataContextProvider>
      <Navigation />
    </PriceDataContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
