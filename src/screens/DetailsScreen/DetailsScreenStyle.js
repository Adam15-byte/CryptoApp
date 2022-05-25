import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
    width: "100%",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop: 20,
    width: "95%",
  },
  topIcon: { width: 30, height: 30 },
  titleTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.grey,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  myPortfolioContainer: {
    width: "100%",
    marginTop: 15,
  },
  myPortfolioText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  statisticsContainer: { width: "100%", marginTop: 15 },
  statsText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  rankingContainer: {
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginLeft: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  rankingText: {
    color: COLORS.white,
    padding: 3,
    fontSize: 12,
    fontWeight: "600",
  },
  priceText: {
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 1,
  },
  dateText: {
    letterSpacing: 1,
    fontWeight: "700",
  },
  priceDataBar: {
    marginLeft: 10,
  },
  activityIndicator: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
