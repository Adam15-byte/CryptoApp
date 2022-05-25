import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    height: 65,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  leftContainer: { flexDirection: "row", alignItems: "center" },
  leftTextContainer: {
    marginLeft: 10,
    justifyContent: "flex-start",
    height: "100%",
  },
  rightContainer: {
    marginLeft: "auto",
    alignItems: "flex-end",
    paddingVertical: 13,
    justifyContent: "space-around",
    height: "100%",
  },
  subtitleText: {
    fontSize: 13,
    color: COLORS.grey,
  },
});
