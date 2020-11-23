import React from 'react';

const GraphBox = () => {

    return (
        <div className={'w-2/3 border p-10'}>
            <h1>graphbox</h1>
            <input type="text" placeholder="search" className={'border'}/>
            &nbsp;<button className={'border border-teal-400 p-1 text-white bg-yellow-600 rounded'}>Get Quote</button>
            &nbsp;<button className={'border border-teal-400 p-1 text-white bg-yellow-600 rounded'}>Buy</button>
            &nbsp;<button className={'border border-teal-400 p-1 text-white bg-yellow-600 rounded'}>Sell</button>
        </div>
    )
}

export default GraphBox;