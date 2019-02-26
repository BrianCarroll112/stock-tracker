import React from 'react';
import Stock from './Stock'

export default (props) => {
  return(
    <div>
      <h1>My Stocks</h1>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="tickerInput">Ticker: </label>
        <input name="inputVal" id="tickerInput" type="text" value={props.inputVal}onChange={props.handleChange}/>
        <input type="submit" value="Add" />
      </form>
      {Object.keys(props.stockList).map(e => (
        <Stock key={e} ticker={e} stockInfo={props.stockList[e]} removeStockFromFeed={props.removeStockFromFeed}/>
      ))}
    </div>
  )
}
