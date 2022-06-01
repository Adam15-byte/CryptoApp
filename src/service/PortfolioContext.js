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

  const calculateDolarValue = async (id, amount) => {
    let final = 0;
    await getFullTokenData(id).then((res) => {
      final = res[0].current_price * amount;
    });
    return final;
  };

  const addToPortfolio = (id, icon, name, amount, symbol) => {
    ////
    // if token is already in the portfolio, just increment the amount
    ////
    if (portfolio.length !== 0) {
      portfolio.map((item, index) => {
        if (item.id === id) {
          calculateDolarValue(id, amount).then((res) => {
            setPortfolio((prevState) => [
              ...prevState,
              {
                ...(prevState[index].amount = amount),
                ...(prevState[index].dolarValue = res),
              },
            ]);
          });
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
    calculateTotalEvaluation();
  };
  useEffect(() => {
    console.log(portfolio);
  }, [portfolio]);
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
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
