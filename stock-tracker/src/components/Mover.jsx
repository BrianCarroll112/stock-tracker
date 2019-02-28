import React from 'react';

export default (props) => {
  return (
  <div>
      <div>
        <p>{props.company.companyName} - {props.company.symbol} ({props.company.sector})</p>
        <p>Open: {props.company.open} Day Low: {props.company.low} Latest Price: {props.company.latestPrice} Change: {props.percent}%</p>
      </div>
      <hr/>
  </div>
)
}
