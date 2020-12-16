import React from "react";

const PortfolioBox = ({ selectedStock , hardcodedStocks}) => {
  return (
      
      <div className={"flex w-1/3 border p-5"}>
      {/* <h1>{hardcodedStocks} </h1> */}
      <h1>selected stock = {selectedStock.name}</h1>
      
      <p>price = ${selectedStock.price}</p>
    </div>
  );
};

export default PortfolioBox;
