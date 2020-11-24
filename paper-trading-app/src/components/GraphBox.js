// import React from "react";
import { useState } from "react";

const GraphBox = () => {
  const [funds, setFunds] = useState(100000);
  const [searchStockStr, setSearchStockStr] = useState("");
  const [selectedStock, setSelectedStock] = useState("");

  const getQuote = async () => {
    setSelectedStock(searchStockStr);
    console.log(
      "get Quote was clicked! also the value of the search is: ",
      searchStockStr
    );
    setSearchStockStr(" ");
  };
  const onInputChange = async (event) => {
    // console.log(event.currentTarget.value);
    setSearchStockStr(event.currentTarget.value);
  };

  return (
    <div className={"w-2/3 border p-10"}>
      <h1>graphbox</h1>
      <h1>Funds Available : {funds}</h1>
      <input
        type={"text"}
        placeholder="search"
        className={"border"}
        onChange={onInputChange}
        value={searchStockStr}
      />
      &nbsp;
      <button
        className={
          "border border-teal-500 pl-2 pr-2 text-white bg-yellow-600 rounded"
        }
        onClick={getQuote}
      >
        Get Quote
      </button>
      {selectedStock && (
        <div>
          <p>Stock Selected = {selectedStock}</p>
          <br/>
          <button
            className={
              "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
            }
          >
            1
          </button>
          &nbsp;&nbsp;
          <button
            className={
              "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
            }
          >
            5
          </button>
          &nbsp;&nbsp;
          <button
            className={
              "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
            }
          >
            10
          </button>
          &nbsp;&nbsp;
          <button
            className={
              "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
            }
          >
            15
          </button>
          &nbsp;&nbsp;
          <br/>
          <button
            className={
              "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
            }
          >
            Buy
          </button>
          &nbsp;&nbsp;
          <button
            className={
              "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
            }
          >
            Sell
          </button>
        </div>
      )}
    </div>
  );
};

export default GraphBox;
