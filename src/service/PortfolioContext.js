import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useContext, useEffect } from "react";
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
  const updateValueInPortfolio = () => {
    if (portfolio.length !== 0) {
      let tempArray = [];
      portfolio.map((item) => {
        getFullTokenData(item.id).then((res) => {
          item.dolarValue = res[0].current_price * item.amount;
          tempArray.push(item);
        });
      });
    }
  };
  useEffect(() => {
    updateValueInPortfolio();
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
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};;

export default PortfolioContext;
