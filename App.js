import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import { PriceDataContextProvider } from "./src/service/PriceDataContext";
import { CryptoCurrencyDataContextProvider } from "./src/service/CryptoCurrencyDataContext";
import { SearchContextProvider } from "./src/service/SearchContext";
import { PortfolioContextProvider } from "./src/service/PortfolioContext";
export default function App() {

  return (
    <PortfolioContextProvider>
      <CryptoCurrencyDataContextProvider>
        <SearchContextProvider>
          <PriceDataContextProvider>
            <Navigation />
          </PriceDataContextProvider>
        </SearchContextProvider>
      </CryptoCurrencyDataContextProvider>
    </PortfolioContextProvider>
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
