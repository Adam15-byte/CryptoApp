import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TextInput,
} from "react-native";
import React, { useContext } from "react";
import PortfolioContext from "../../service/PortfolioContext";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import { styles } from "./ChangeAmountInPortfolioStyle";

const ChangeAmountInPortfolio = ({ id, icon, name, symbol }) => {
  const {
    changeChangeAmountModalVisibility,
    changeAmountModalVisibility,
    tokensToAdd,
    changeTokensToAdd,
    errorInModal,
    changeErrorInModal,
    clearErrorInModal,
    addToPortfolio,
    changeModalData,
    updatePortfolio,
    calculateTotalEvaluation,
  } = useContext(PortfolioContext);
  const validate = (input) => {
    const inputToFloat = parseFloat(input);
    if (inputToFloat <= 0) {
      changeErrorInModal("Token amount must be bigger than 0");
    }
    if (inputToFloat > 0) {
      clearErrorInModal();
      changeTokensToAdd("");
      updatePortfolio(changeModalData.name, inputToFloat);
      calculateTotalEvaluation();
    }
  };
  return (
    <>
      {changeAmountModalVisibility && (
        <TouchableWithoutFeedback onPress={changeChangeAmountModalVisibility}>
          <View style={styles.blackBackgroundContainer}>
            <TouchableWithoutFeedback onPress={() => null}>
              <View style={styles.whiteFormContainer}>
                <View style={styles.topBarContainer}>
                  <Image
                    source={{ uri: changeModalData.icon }}
                    style={styles.tokenImage}
                  />
                  <Text style={styles.coinNameStyle}>
                    {changeModalData.name}
                  </Text>
                </View>
                <View style={styles.currentTokensInformation}>
                  <Text>Currently in portfolio: </Text>
                  <Text>
                    {changeModalData.tokenAmount}{" "}
                    {changeModalData.ticker.toUpperCase()}
                  </Text>
                </View>
                <View style={styles.newTokensAmount}>
                  <Text>Updated amount</Text>
                  <View style={styles.inputField}>
                    <TextInput
                      placeholder="new value"
                      keyboardType="numeric"
                      value={tokensToAdd}
                      onChangeText={(text) => changeTokensToAdd(text)}
                    />
                  </View>
                </View>
                {errorInModal !== "" && <Text>{errorInModal}</Text>}
                <View style={styles.buttonsContainer}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      changeTokensToAdd("");
                      changeChangeAmountModalVisibility();
                    }}
                  >
                    <View style={styles.cancelButton}>
                      <Ionicons name="close" size={16} color={COLORS.white} />
                      <Text style={styles.buttonText}>Cancel</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => validate(tokensToAdd)}
                  >
                    <View style={styles.submitButton}>
                      <Ionicons
                        name="md-checkmark"
                        size={16}
                        color={COLORS.white}
                      />
                      <Text style={styles.buttonText}>Submit</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default ChangeAmountInPortfolio;
