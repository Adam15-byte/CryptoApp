import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../consts/colors";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  blackBackgroundContainer: {
    position: "absolute",
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  whiteFormContainer: {
    minHeight: height * 0.25,
    width: width * 0.7,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  topBarContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tokenImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  coinNameStyle: {
    fontSize: 16,
    fontWeight: "600",
  },
  currentTokensInformation: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  newTokensAmount: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  amountSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
  },
  inputField: {
    width: "30%",
    height: 30,
    backgroundColor: COLORS.lightgrey,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  cancelButton: {
    flexDirection: "row",
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.red,
    borderRadius: 10,
  },
  submitButton: {
    flexDirection: "row",
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.green,
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "600",
  },
});
