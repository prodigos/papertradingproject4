import React from 'react';
import GraphBox from "../components/BoxMod"



const PortfolioBox = () => {

    return (
        <div className={'flex w-1/3 border p-5'}>portafolio box
        <h1>selected stock = {selectedStock.name}</h1>
         
         <GraphBox/>
         <p>this is your stock = {selectedStock.name}</p>
        
        </div>
    )
}

export default PortfolioBox;