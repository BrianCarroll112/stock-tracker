import React, { Component } from 'react';
import NewsItem from './NewsItem'

class CompanyDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      showChart: true,
      showNews: true,
      showRelevant: true
    }
  }

  componentDidMount() {
    // set all shows to false? unless remount will reset them to coded value
  }

  render(){
    const { symbol, companyName, CEO, description, exchange, industry, sector, website } = this.props.companyData.company;
    return(
      <div className="details-container-div">
        <div className="basic-details">
          <h1> <a href={website} rel="noopener noreferrer" target="_blank" >{companyName}</a> - {symbol} - {exchange}</h1>
          <h3>{CEO}</h3>
          <img src={this.props.companyData.logo.url} />
          <h5>Sector: {sector}</h5>
          <h5>Industry: {industry}</h5>
          <p>{description}</p>
        </div>
      <div className="chart-container-div">
        {this.state.showChart && (
            <h3>Chart</h3>
            //chart - import libraries, etc. or make own component and incl input based api calls for chart endpoint
        )}
      </div>
      <div className="news-container-div">
        <h3>News</h3>
        {this.state.showNews && (
          this.props.companyData.news.map(e => (
            <NewsItem key= {e.datetime} news={e} />
          ))
        )}
        </div>
        <div className="relevant-conatiner-div">
          <h3>Relevant Tickers (click)</h3>
          {this.state.showRelevant && (
            <p>{this.props.companyData.relevant.symbols.map(e => (
                <span
                  key={e}
                  onClick={() => this.props.showRelevant(e)}
                  className="relevant-ticker"
                  >
                  {e}
                </span>))}
            </p>)
          }
        </div>
      </div>
    )
  }
}

export default CompanyDetails
