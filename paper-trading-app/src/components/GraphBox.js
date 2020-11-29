// import React from "react";
import { useState } from "react";

let hardcodedStocks = [
  { name: "AAPL", price: "120" },
  { name: "AMZ", price: "235" },
  { name: "GE", price: "21" },
];

const GraphBox = () => {
  const [funds, setFunds] = useState(100000);
  const [searchStockStr, setSearchStockStr] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [sharesButtons, setSharesButton] = useState(Number("0"));

  const getQuote = async () => {
    let stock;
    hardcodedStocks.map((s) => {
      if (s.name === searchStockStr) {
        stock = s;
      }
    });

    console.log(stock);

    setSelectedStock(stock);
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

  const updateShares = async (num) => {
    // console.log(event);
    // let buttonInner = event.target.innerText;
    setSharesButton(num);
    // if (sharesButtons === buttonInner) {
    //   ("border border-teal-400 p-1 text-white bg-yellow-600 rounded");
    // } else {
    //   ("border border-brown-400 p-1 text-white bg-green-600 rounded");
    // }
    // debugger
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
          <p className="border border-brown-400 p-1 text-white bg-green-600 rounded">Stock Selected = {selectedStock.name} | Price = {selectedStock.price}</p>
          <br />
          <button
            onClick={() => updateShares(1)}
            className={
              sharesButtons === 1
                ? "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
                : "border border-brown-400 p-1 text-white bg-green-600 rounded"
            }
          >
            1
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => updateShares(5)}
            className={
              sharesButtons === 5
                ? "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
                : "border border-brown-400 p-1 text-white bg-green-600 rounded"
            }
          >
            5
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              setSharesButton(10);
            }}
            className={
              sharesButtons === 10
                ? "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
                : "border border-brown-400 p-1 text-white bg-green-600 rounded"
            }
          >
            10
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              setSharesButton(15);
            }}
            className={
              sharesButtons === 15
                ? "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
                : "border border-brown-400 p-1 text-white bg-green-600 rounded"
            }
          >
            15
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              setSharesButton(20);
            }}
            className={
              sharesButtons === 20
                ? "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
                : "border border-brown-400 p-1 text-white bg-green-600 rounded"
            }
          >
            20
          </button>
          &nbsp;&nbsp;
          <br />
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
