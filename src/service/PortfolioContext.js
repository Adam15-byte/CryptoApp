import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useContext, useEffect } from "react";
import { SearchContext } from "./SearchContext";

export const PortfolioContext = createContext();
export const PortfolioContextProvider = ({ children }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [changeAmountModalVisibility, setChangeAmountModalVisibility] =
    useState(false);
  const [changeModalData, setChangeModalData] = useState({
    icon: "",
    name: "",
    tokenAmount: 0,
    ticker: "",
  });
  const { getFullTokenData } = useContext(SearchContext);
  const changeChangeAmountModalVisibility = (
    iconInput,
    nameInput,
    tokenAmountInput,
    tickerInput
  ) => {
    if (changeAmountModalVisibility === true) {
      setChangeAmountModalVisibility((prevState) => !prevState);
    }
    if (changeAmountModalVisibility === false) {
      setChangeModalData((prevState) => ({
        ["icon"]: iconInput,
        ["name"]: nameInput,
        ["tokenAmount"]: tokenAmountInput,
        ["ticker"]: tickerInput,
      }));
      setChangeAmountModalVisibility((prevState) => !prevState);
    }
  };
  const changeModalVisibility = () => {
    setModalVisibility((prevState) => !prevState);
  };
  const [tokensToAdd, setTokensToAdd] = useState("");
  const changeTokensToAdd = (input) => {
    setTokensToAdd((prevState) => input);
  };
  const [errorInModal, setErrorInModal] = useState("");
  const changeErrorInModal = (type) => {
    setErrorInModal((prevState) => type);
  };
  const clearErrorInModal = () => {
    setErrorInModal((prevState) => "");
  };

  ////
  // Array of positions in portfolio
  ////
  const [portfolio, setPortfolio] = useState([]);
  const addToPortfolio = (id, icon, name, amount, symbol) => {
    setPortfolio((prevState) => [
      ...prevState,
      {
        id: id,
        icon: icon,
        name: name,
        amount: amount,
        symbol: symbol,
        dolarValue: 0,
      },
    ]);
  };
  ////
  // function for modal, used to change the amount of tokens for a specific coin in portfolio
  ////
  const updatePortfolio = (name, amount) => {
    portfolio.map((item, index) => {
      if (item.name === name) {
        item.amount = amount;
      }
    });
    updateValueInPortfolio();
    calculateTotalEvaluation();
  };
  const updateValueInPortfolio = () => {
    if (portfolio.length !== 0) {
      portfolio.map((item) => {
        getFullTokenData(item.id).then((res) => {
          item.dolarValue = res[0].current_price * item.amount;
        });
      });
    }
  };
  const [totalEvaluation, setTotalEvaluation] = useState(0);
  const calculateTotalEvaluation = () => {
    let total = 0;
    if (portfolio.length !== 0) {
      portfolio.map((item) => {
        total += item.dolarValue;
      });
    }
    setTotalEvaluation(total);
  };
  useEffect(() => {
    updateValueInPortfolio();
    calculateTotalEvaluation();
  }, [portfolio]);

  return (
    <PortfolioContext.Provider
      value={{
        changeModalVisibility,
        modalVisibility,
        tokensToAdd,
        changeTokensToAdd,
        errorInModal,
        changeErrorInModal,
        clearErrorInModal,
        addToPortfolio,
        portfolio,
        totalEvaluation,
        calculateTotalEvaluation,
        changeChangeAmountModalVisibility,
        changeAmountModalVisibility,
        changeModalData,
        updatePortfolio,
        updateValueInPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
