import React from "react";
import { useState } from "react";
import GraphBox from "./GraphBox";
import PortfolioBox from "./PortfolioBox";

let hardcodedStocks = [
  { name: "AAPL", price: "120" },
  { name: "AMZ", price: "235" },
  { name: "GE", price: "21" },
];

const BoxMod = () => {
  const [funds, setFunds] = useState(100000);
  const [searchStockStr, setSearchStockStr] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [sharesButtons, setSharesButton] = useState(Number("0"));

  const getQuote = async (arr) => {
    let stock;
    hardcodedStocks.forEach((s) => {
      if (s.name === searchStockStr) {
        stock = s;
      }
      console.log(s);
      console.log(searchStockStr);
    });
    // return stock;

    console.log(stock);

    setSelectedStock(stock);
    // console.log(
    //   "get Quote was clicked! also the value of the search is: ",
    //   searchStockStr
    // );
    setSearchStockStr(" ");
  };
  const onInputChange = async (event) => {
    // debugger
    console.log(event.currentTarget.value);

    setSearchStockStr(event.currentTarget.value);
  };

  const updateShares = async (num) => {
    setSharesButton(num);
  };

  const buyStock = async () => {
    //   console.log(
    //     "User wants to buy : ",
    //     sharesButtons,
    //     "shares",
    //     "of",
    //     selectedStock.name,
    //     "at current price of ",
    //     selectedStock.price
    //   );
    let cost = sharesButtons * selectedStock.price;
    console.log("cost is = ", cost);
    let subs = funds - cost;
    setFunds(subs);
  };

const sellStock = () => {
  let cost = sharesButtons *selectedStock.price;
  console.log("selling amount is " , cost);
  let adds = funds + cost;
  setFunds(adds);
}

  return (
    <div className={"flex"}>
      <GraphBox
        funds={funds}
        selectedStock={selectedStock}
        getQuote={getQuote}
        onInputChange={onInputChange}
        updateShares={updateShares}
        buyStock={buyStock}
        sellStock={sellStock}
      />
      {/* {selectedStock && JSON.stringify(selectedStock)} */}
      <PortfolioBox selectedStock={selectedStock} />
    </div>
  );
};

export default BoxMod;
