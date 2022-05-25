import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    width: "100%",
    height: 65,
    alignItems: "stretch",
    paddingHorizontal: 30,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 32,
    width: 32,
  },
  titleContainer: {
    marginLeft: 10,
    justifyContent: "space-around",
    paddingVertical: 1,
  },
  rightContainer: {
    marginLeft: "auto",
    justifyContent: "space-around",
  },
  priceContainer: {
    alignItems: "flex-end",
    paddingVertical: 1,
  },
  coinTitle: { fontWeight: "bold", fontSize: 16 },
  coinTicker: { color: COLORS.grey, fontSize: 16 },
  priceText: { fontSize: 16 },
  priceChangeText: { fontSize: 16 },
});
