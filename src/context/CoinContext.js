import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { CoinData } from "../components/CoinData";

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [dataComp, setDataComp] = useState([]);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  useEffect(() => {    
    coinApi();
  }, []);

  const coinApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const data = await response.data;
      setCoins(data);
      let comp = CoinData(data);
      setDataComp(comp);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const lastIndex = currentPage * itemPerPage;
  const firsIndex = lastIndex - itemPerPage;
  const cointPage = dataComp.slice(firsIndex,lastIndex);

  const handleChange = (e) => {
    setSearch(e.target.value);
    const filteredCoins = CoinData(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setDataComp(filteredCoins)
  };

  const renderButton = () => {
    const style = 'bg-gradient-to-r from-purple-200 to-purple-500 shadow-md '
    const totalPage = Math.ceil(dataComp.length / itemPerPage);
    const button = [];
    for (let i = 1; i <= totalPage; i++) {
      button.push(
        <button
          className={`${i === currentPage? style : ""} w-6 h-auto rounded-full border border-black font-semibold text-[0.9rem]`}
          key={i}
          onClick={() => setCurrentPage(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }
    return button;
  };
  return (
    <CoinContext.Provider
      value={{ cointPage,handleChange, search, renderButton, loading }}
    >
      {children}
    </CoinContext.Provider>
  );
};
