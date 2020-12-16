import React from "react";

const PortfolioBox = ({ selectedStock , hardcodedStocks, totalAmount}) => {
  return (
      
      <div className={"flex w-1/3 border p-5"}>
      {/* <h1>{hardcodedStocks} </h1> */}
      <h1>selected stock = {selectedStock.name}</h1>
      
      <p>price = ${selectedStock.price}</p>
      <p>total amount = ${totalAmount}</p>
    </div>
  );
};

export default PortfolioBox;
