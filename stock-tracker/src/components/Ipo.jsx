import React from 'react';

export default (props) => (
  <div className="ipo-div">
    <h1><a href={`https://${props.company.url}`} rel="noopener noreferrer" target="_blank" > {props.company.Company}</a> - {props.company.Symbol} - {props.company.Market}</h1>
    <h3>{props.company.ceo}</h3>
    <h6>{props.company.city}, {props.company.state}</h6>
    <p>{props.company.companyDescription}</p>
    <br />
    <p>{props.company.competition}</p>
    <br />
    <p>Shares: {props.company.Amount}  Float: {props.company.Float}</p>
    <p>Price: {props.company.Price} Percent Offered: {props.company.Percent}</p>
    <p>Expected Date: {props.company.Expected}</p>

  </div>
)
