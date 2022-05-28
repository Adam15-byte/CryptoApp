import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useContext, useEffect } from "react";
import { SearchContext } from "./SearchContext";

export const PortfolioContext = createContext();
export const PortfolioContextProvider = ({ children }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [changeAmountModalVisibility, setChangeAmountModalVisibility] =
    useState(false);
  const [changeModalData, setChangeModalData] = useState({
    id: "",
    icon: "",
    name: "",
    tokenAmount: 0,
    symbol: "",
  });
  const { getFullTokenData } = useContext(SearchContext);
  const changeChangeAmountModalVisibility = (
    idInput,
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
        ["id"]: idInput,
        ["icon"]: iconInput,
        ["name"]: nameInput,
        ["tokenAmount"]: tokenAmountInput,
        ["symbol"]: tickerInput,
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
    ////
    // if token is already in the portfolio, just increment the amount
    ////
    if (portfolio.length !== 0) {
      portfolio.map((item, index) => {
        if (item.id === id) {
          item.amount += amount;
          return;
        }
      });
    }
    ////
    // check again if the token is in portoflio. It it it new token then add it to portfolio.
    ////
    let newTokenPassed = true;
    portfolio.map((item) => {
      if (item.id === id) newTokenPassed = false;
    });
    {
      newTokenPassed
        ? setPortfolio((prevState) => [
            ...prevState,
            {
              id: id,
              icon: icon,
              name: name,
              amount: amount,
              symbol: symbol,
              dolarValue: 0,
            },
          ])
        : null;
    }
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
        updateValueInPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
