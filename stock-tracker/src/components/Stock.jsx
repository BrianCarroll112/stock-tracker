import React from 'react';

export default (props) => (
  <div className="stock-row">
    <h3>{props.ticker}</h3> <p>Last: {props.stockInfo.lastSaleSize} @ {props.stockInfo.lastSalePrice}</p>
    <p>Ask: {props.stockInfo.askSize} @ {props.stockInfo.askPrice}</p>
    <p>Bid: {props.stockInfo.bidSize} @ {props.stockInfo.bidPrice}</p>
</div>

)
