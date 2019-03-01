import React from 'react';

export default (props) => {
  return (
  <div>
      <div className="mover-item">
        <p><strong>{props.company.companyName}</strong> - {props.company.symbol} ({props.company.sector})</p>
        <p><u>Open:</u> {props.company.open} <u>Day Low:</u> {props.company.low} <u>Latest Price:</u> ${props.company.latestPrice} Change: {props.percent}%</p>
      </div>
  </div>
)
}
