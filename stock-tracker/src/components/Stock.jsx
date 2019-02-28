import React from 'react';

export default (props) => (
  <div className="stock-row">
    <p className="ticker">{props.ticker}</p> <p className="last">Last: {props.stockInfo.lastSaleSize} @ {props.stockInfo.lastSalePrice}</p>
    <p className="ask">Ask: {props.stockInfo.askSize} @ {props.stockInfo.askPrice}</p>
    <p className="bid">Bid: {props.stockInfo.bidSize} @ {props.stockInfo.bidPrice}</p>
    <div className="stock-item-buttons">
      <p onClick={() => props.removeStockFromFeed(props.ticker)}>Remove</p>
    </div>
  </div>

)
