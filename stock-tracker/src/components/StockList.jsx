import React from 'react';
import Stock from './Stock'

export default (props) => {
  return(
    <div>
      <h1>My Stocks</h1>
      {props.tickers.map(e => (
        <Stock key={e} ticker={e} />
      ))}
    </div>
  )
}
