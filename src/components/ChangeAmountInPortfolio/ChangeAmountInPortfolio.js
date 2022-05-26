import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TextInput,
} from "react-native";
import React, { useContext } from "react";
import { styles } from "./AddToPortfolioStyle";
import PortfolioContext from "../../service/PortfolioContext";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";

const ChangeAmountInPortfolio = ({ id, icon, name, symbol }) => {
  const {
    changeModalVisibility,
    modalVisibility,
    tokensToAdd,
    changeTokensToAdd,
    errorInModal,
    changeErrorInModal,
    clearErrorInModal,
    addToPortfolio,
  } = useContext(PortfolioContext);
  const validate = (input) => {
    const inputToFloat = parseFloat(input);
    if (inputToFloat <= 0) {
      changeErrorInModal("Token amount must be bigger than 0");
    }
    if (inputToFloat > 0) {
      clearErrorInModal();
      changeTokensToAdd("");
      addToPortfolio(id, icon, name, inputToFloat, symbol);
    }
  };
  return (
    <>
      {modalVisibility && (
        <TouchableWithoutFeedback onPress={changeModalVisibility}>
          <View style={styles.blackBackgroundContainer}>
            <TouchableWithoutFeedback onPress={() => null}>
              <View style={styles.whiteFormContainer}>
                <View style={styles.topBarContainer}>
                  <Image source={{ uri: icon }} style={styles.tokenImage} />
                  <Text style={styles.coinNameStyle}>{name}</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.amountSubtitle}>Amount of tokens:</Text>
                  <View style={styles.inputField}>
                    <TextInput
                      placeholder="input a number"
                      value={tokensToAdd}
                      onChangeText={(text) => changeTokensToAdd(text)}
                      keyboardType="numeric"
                    />
                  </View>
                  {errorInModal !== "" && <Text>{errorInModal}</Text>}
                  <View style={styles.buttonsContainer}>
                    <TouchableWithoutFeedback onPress={changeModalVisibility}>
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
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default ChangeAmountInPortfolio;
