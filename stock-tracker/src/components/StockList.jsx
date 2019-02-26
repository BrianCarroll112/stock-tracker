import React from 'react';
import Stock from './Stock'

export default (props) => {
  return(
    <div>
      <h1>My Stocks</h1>
      {Object.keys(props.stockList).map(e => (
        <Stock key={e} ticker={e} stockInfo={props.stockList[e]} />
      ))}
    </div>
  )
}
