import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useContext } from "react";
import { SearchContext } from "./SearchContext";

export const PortfolioContext = createContext();
export const PortfolioContextProvider = ({ children }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const { getFullTokenData } = useContext(SearchContext);
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
  const addToPortfolio = (icon, name, amount, symbol) => {
    setPortfolio((prevState) => [
      ...prevState,
      { icon: icon, name: name, amount: amount, symbol: symbol, dolarValue: 0 },
    ]);
  };

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
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
