import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useContext, useEffect } from "react";
import { SearchContext } from "./SearchContext";

export const PortfolioContext = createContext();
export const PortfolioContextProvider = ({ children }) => {
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

  const calculateDolarValue = async (id, amount) => {
    let final = 0;
    await getFullTokenData(id).then((res) => {
      final = res[0].current_price * amount;
    });
    return final;
  };

  const addToPortfolio = (id, icon, name, amount, symbol) => {
    ////
    // check if value is zero and remove from portfolio array
    ////
    if (amount === 0) {
      const newPortfolio = portfolio.filter((item) => item.id !== id);
      setPortfolio((prevState) => newPortfolio);
      return;
    }
    ////
    // if token is already in the portfolio, just increment the amount
    ////
    if (portfolio.length !== 0) {
      portfolio.map((item, index) => {
        if (item.id === id) {
          calculateDolarValue(id, amount).then((res) => {
            const updatedPortfolio = [...portfolio];
            updatedPortfolio[index].amount = amount;
            updatedPortfolio[index].dolarValue = res;
            setPortfolio((prevState) => updatedPortfolio);
          });
        }
      });
      return;
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
        ? calculateDolarValue(id, amount).then((res) => {
            setPortfolio((prevState) => [
              ...prevState,
              {
                id: id,
                icon: icon,
                name: name,
                amount: amount,
                symbol: symbol,
                dolarValue: res,
              },
            ]);
          })
        : null;
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
    calculateTotalEvaluation();
  }, [portfolio]);

  return (
    <PortfolioContext.Provider
      value={{
        changeModalVisibility,
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
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
