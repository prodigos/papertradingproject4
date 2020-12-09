import React from "react";
// import { useState } from "react";

// let hardcodedStocks = [
//   { name: "AAPL", price: "120" },
//   { name: "AMZ", price: "235" },
//   { name: "GE", price: "21" },
// ];

const GraphBox = (props) => {
  
  // const [funds, setFunds] = useState(100000);
  // const [searchStockStr, setSearchStockStr] = useState("");
  // const [selectedStock, setSelectedStock] = useState("");
  // const [sharesButtons, setSharesButton] = useState(Number("0"));

  // const getQuote = async () => {
  //   let stock;
  //   hardcodedStocks.map((s) => {
  //     if (s.name === searchStockStr) {
  //       stock = s;
  //     }
  //     return stock
  //   });

  //   console.log(stock);

  //   setSelectedStock(stock);
  //   // console.log(
  //   //   "get Quote was clicked! also the value of the search is: ",
  //   //   searchStockStr
  //   // );
  //   setSearchStockStr(" ");
  // };
  // const onInputChange = async (event) => {
  //   setSearchStockStr(event.currentTarget.value);
  // };

  // const updateShares = async (num) => {
  //   setSharesButton(num);
  // };

  // const buyStock = async () => {

  //   console.log("User wants to buy : ", sharesButtons , 'shares' , 'of', selectedStock.name, "at current price of ", selectedStock.price)
  //   let cost = sharesButtons * selectedStock.price;
  //   console.log("cost is = ", cost);
  //   let subs = funds - cost;
  //   setFunds(subs);
  // }


  return (
    <div className={"w-2/3 border p-10"}>
      <h1>graphbox</h1>
      <h1>Funds Available : </h1>
      <input
        type={"text"}
        placeholder="search"
        className={"border"}
        onChange={props.onInputChange()}
        value={props.searchStockStr}
      />
      &nbsp;
      <button
        className={
          "border border-teal-500 pl-2 pr-2 text-white bg-yellow-600 rounded"
        }
        onClick={props.getQuote()}
      >
        Get Quote
      </button>
      {props.selectedStock && (
        <div>
          <p className="border border-brown-400 p-1 text-white bg-green-600 rounded">
            Stock Selected = {props.selectedStock.name} | Price = $
            {props.selectedStock.price}
          </p>
          <br />
          <button
            onClick={() => props.updateShares(1)}
            className={
              props.sharesButtons === 1
                ? "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
                : "border border-brown-400 p-1 text-white bg-green-600 rounded"
            }
          >
            1
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => props.updateShares(5)}
            className={
              props.sharesButtons === 5
                ? "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
                : "border border-brown-400 p-1 text-white bg-green-600 rounded"
            }
          >
            5
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              props.setSharesButton(10);
            }}
            className={
              props.sharesButtons === 10
                ? "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
                : "border border-brown-400 p-1 text-white bg-green-600 rounded"
            }
          >
            10
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              props.setSharesButton(15);
            }}
            className={
              props.sharesButtons === 15
                ? "border border-teal-400 p-1 text-white bg-yellow-600 rounded"
                : "border border-brown-400 p-1 text-white bg-green-600 rounded"
            }
          >
            15
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              props.setSharesButton(20);
            }}
            className={
              props.sharesButtons === 20
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
            onClick={props.buyStock}
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
