import React from "react";
// import { useState } from "react";

const GraphBox = ({
  funds,
  getQuote,
  onInputChange,
  updateShares,
  buyStock,
  selectedStock,
  sharesButtons,
  setSharesButton,
  searchStockStr,
}) => {
  return (
    <div className={"w-2/3 border p-10"}>
      <h1>graphbox</h1>
      <h1>Funds Available : {funds}</h1>
      <input
      name={"searchInput"}
        type={"text"}
        placeholder="search"
        className={"border"}
        onChange={(event) => onInputChange(event)}
        value={searchStockStr}
      />
      &nbsp;
      <button
        className={
          "border border-teal-500 pl-2 pr-2 text-white bg-yellow-600 rounded"
        }
        onClick={() => getQuote()}
      >
        Get Quote
      </button>
      {selectedStock && (
        <div>
          <p className="border border-brown-400 p-1 text-white bg-green-600 rounded">
            Stock Selected = {selectedStock.name} | Price = $
            {selectedStock.price}
          </p>
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
            onClick={() => buyStock()}
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
