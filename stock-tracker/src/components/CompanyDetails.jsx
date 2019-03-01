import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Chart from './Chart';

class CompanyDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      showChart: false,
      showNews: false,
      showRelevant: false
    }
  }

  toggleChart(){
    this.setState(prevState => (
      {
        showChart: !prevState.showChart
      }
    ))
  }
  toggleNews(){
    this.setState(prevState => (
      {
        showNews: !prevState.showNews
      }
    ))
  }
  toggleRelevant(){
    this.setState(prevState => (
      {
        showRelevant: !prevState.showRelevant
      }
    ))
 }

  render(){
    const { symbol, companyName, CEO, description, exchange, industry, sector, website } = this.props.companyData.company;
    return(
      <div className="details-container-div">
        <div className="basic-details">
          <h1> <a href={website} rel="noopener noreferrer" target="_blank" >{companyName}</a> - {symbol} - {exchange}</h1>
          <h3>{CEO}</h3>
          <img src={this.props.companyData.logo.url} alt={symbol + " logo"} />
          <h5>Sector: {sector}</h5>
          <h5>Industry: {industry}</h5>
          <p>{description}</p>
        </div>
      <div className="chart-container-div">
        <h2>Chart <button onClick={() => this.toggleChart()}>Show/Hide</button></h2>
        {this.state.showChart && (
          <div className="chart-div">
            <form onSubmit={e => {
                e.preventDefault()
                this.props.getChartData(symbol, this.props.selectedChart)
                }} >
              <select
                name="selectChart"
                onChange={this.props.handleChange}
                defaultValue="1m"
                value={this.props.selectChart}
                >
                  <option value="1d">1d</option>
                  <option value="1m">1m</option>
                  <option value="3m">3m</option>
                  <option value="6m">6m</option>
                  <option value="1y">1y</option>
                  <option value="2y">2y</option>
                  <option value="5y">5y</option>
              </select>
              <input type="submit" />
            </form>
            <div className="chart-parent">
              <Chart data={this.props.chartData} />
            </div>
          </div>
        )}
      </div>
      <div className="news-container-div">
        <h2>News <button onClick={() => this.toggleNews()}>Show/Hide</button></h2>
        <div className="news-container-inner-div">
          {this.state.showNews && (
            this.props.companyData.news.map(e => (
              <NewsItem className="news-item" key={e.datetime} news={e} />
            ))
          )}
        </div>
      </div>
        <div className="relevant-container-div">
          <h2>Relevant Tickers <button onClick={() => this.toggleRelevant()}>Show/Hide</button></h2>
          {this.state.showRelevant && (
            <div className="relevant-container-inner-div">
              <p>{this.props.companyData.relevant.symbols.map(e => (
                  <span
                    key={e}
                    onClick={() => {
                      this.props.showRelevant(e)
                      this.props.getChartData(e, this.props.selectedChart);
                    }}
                    className="relevant-ticker"
                    >
                    {e}
                  </span>))}
              </p>
            </div>)}

        </div>
      </div>
    )
  }
}

export default CompanyDetails;
