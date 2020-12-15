import React from "react";

const PortfolioBox = ({ selectedStock }) => {
  return (
      
      <div className={"flex w-1/3 border p-5"}>
      <h1>here stocks will be displayed = </h1>
      <h1>selected stock = {selectedStock.name}</h1>
      <p>this is your stock = {selectedStock.name}</p>
    </div>
  );
};

export default PortfolioBox;
