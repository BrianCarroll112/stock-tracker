import React from 'react';

export default (props) => (
  <div className="ipo-div">
    <h2><a href={`https://${props.company.url}`} rel="noopener noreferrer" target="_blank" > {props.company.Company}</a> - {props.company.Symbol} - {props.company.Market}</h2>
    <h4>{props.company.ceo}</h4>
    <h6>{props.company.city}, {props.company.state}</h6>
    <p>{props.company.companyDescription}</p>
    <div className="ipo-shares-div">
      <span><u>Shares:</u> {props.company.Amount}</span>
      <span><u>Float:</u> {props.company.Float}</span>
      <span><u>Price:</u> {props.company.Price}</span>
      <span><u>Percent Offered:</u> {props.company.Percent}</span>
    </div>
    <p><u>Expected Date:</u> {props.company.Expected}</p>

  </div>
)
