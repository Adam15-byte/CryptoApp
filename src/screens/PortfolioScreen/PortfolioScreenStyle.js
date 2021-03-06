import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../consts/colors";
const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
  },
  topBarContainer: {},
  headerText: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  topBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop: 20,
    width: "95%",
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.grey,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  bottomTabWithSummary: {
    width: "100%",
    height: 130,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.grey,
    width: "90%",
    alignSelf: "center",
    marginTop: "auto",
  },
  summaryTitle: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  summeryValue: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});
