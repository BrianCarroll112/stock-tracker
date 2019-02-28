import React, { Component } from 'react';

class CompanyDetails extends Component {
  constructor(props){
    super(props)

    //set some state for conditional rendering news, etc, onclick of > flip boolean
  }

  componentDidMount() {
    this.props.getCompanyData(this.props.match.params.stock);
  }

  render(){
    console.log(this.props)
    const {symbol, companyName, CEO, description, exchange, industry, sector, website} = this.props.companyData.company;
    return(
      <div className="details-container-div">
        <h1> <a href={website} rel="noopener noreferrer" target="_blank" >{companyName}</a> - {symbol} - {exchange}</h1>
        <h3>{CEO}</h3>
        <h5>Sector: {sector}</h5>
        <h5>Industry: {industry}</h5>
        <p>{description}</p>

      </div>
    )
  }
}

export default CompanyDetails
