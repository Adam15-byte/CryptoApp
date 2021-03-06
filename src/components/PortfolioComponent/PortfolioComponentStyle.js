import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors";

export const styles = StyleSheet.create({
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
    flexDirection: "row",
    alignItems: "center",
  },
  amountsContainer: { alignItems: "flex-end", marginLeft: 10 },
  changeButton: { flexDirection: "row", alignItems: "center" },
  tokenAmountContainer: {
    flexDirection: "row",
  },
  dolarText: { fontSize: 16 },
  tokenText: { color: COLORS.grey },
});
