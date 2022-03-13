import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import { PriceDataContextProvider } from "./src/service/PriceDataContext";
import { CryptoCurrencyDataContextProvider } from "./src/service/CryptoCurrencyDataContext";

export default function App() {
  return (
    <CryptoCurrencyDataContextProvider>
      <PriceDataContextProvider>
        <Navigation />
      </PriceDataContextProvider>
    </CryptoCurrencyDataContextProvider>
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
