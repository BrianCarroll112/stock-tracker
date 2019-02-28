import React, { Component } from 'react';
import './App.css';
import StockList from './components/StockList';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Details from './components/Details';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  fetchChartData,
  fetchIpoData,
  fetchMoverData,
  fetchDetailData } from './services/fetchData';
import CompanyDetails from './components/CompanyDetails';
import BigMovers from './components/BigMovers';
import UpcomingIpos from './components/UpcomingIpos';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      tickers: [],
      socket: {},
      stockList: {},
      inputVal: '',
      companyData: {},
      ipoData: [],
      moverData: {
        gainers: [],
        losers: []
      },
      chartData: {},
      selectChart: '1m'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitForDesc = this.handleSubmitForDesc.bind(this);
    this.handleRelevantClick = this.handleRelevantClick.bind(this);
    this.removeStockFromFeed = this.removeStockFromFeed.bind(this);
    this.getCompanyData = this.getCompanyData.bind(this);
    this.getMoverData = this.getMoverData.bind(this);
    this.getIpoData = this.getIpoData.bind(this);
    this.getChartData = this.getChartData.bind(this);
  }

  getStockFeed(stock) {
    const url = 'https://ws-api.iextrading.com/1.0/tops'
    const socket = require('socket.io-client')(url)
    socket.on('message', message => {
      const stockDataObj = JSON.parse(message);
      const currentTicker = stockDataObj.symbol;

      this.setState(prevState => ({
        tickers: [...prevState.tickers, currentTicker],
        stockList: {
          ...prevState.stockList,
          [currentTicker]: stockDataObj
        }}));
    });

    socket.on('connect', () => {
      socket.emit('subscribe', stock);
    })
    this.setState({
      socket: socket
    })
  }

  addStockToFeed(stock) {
    this.state.socket.emit('subscribe', stock)
  }

  async removeStockFromFeed(stock) {
    await this.state.socket.emit('unsubscribe', stock)
    this.setState(prevState => {
      const stockList = Object.keys(prevState.stockList).reduce((object,key) => {
        if (key !== stock) {
          object[key] = prevState.stockList[key]
        }
        return object
      }, {});
      return ({
        stockList
      })
    })
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
      })
    }

  handleSubmit(e){
    e.preventDefault();
    this.addStockToFeed(this.state.inputVal);
    this.setState({
      inputVal: ''
    })
  }

  async handleSubmitForDesc(e){
    e.preventDefault();
    await this.props.history.replace('/details/' + this.state.inputVal);
    this.getCompanyData(this.state.inputVal);
    this.getChartData(this.state.inputVal, this.state.selectChart);
    this.setState({
      inputVal: ''
    })
  }

  async handleRelevantClick(e){
    this.props.history.replace('/details/' + e);
    await this.getCompanyData(e)
  }

  async getCompanyData(stock){
    const companyData = await fetchDetailData(stock);
    this.setState({
      companyData
    })
  }

  async getChartData(stock, option) {
    const chartDataResp = await fetchChartData(stock, option);
    const chartData = {};
    if (option === "1d"){
      chartDataResp.forEach(e => {
        chartData[e.label] = e.close
      })
    } else {
    chartDataResp.forEach(e => {
      chartData[e.date] = e.close
    })}

    this.setState({
      chartData
    })
  }

  async getIpoData(){
    const ipoFullData = await fetchIpoData();
    const ipoData = ipoFullData.viewData.map((e, i) => {
      return (
        {...e,
          ...ipoFullData.rawData[i]
        }
      );
    });

    this.setState({
      ipoData
    })
  }

  async getMoverData(){
    const moverData = await fetchMoverData();

    this.setState({
      moverData
    })
  }

  componentDidMount(){
    this.getStockFeed('aapl');
    this.getCompanyData('amd');
  }

  render() {
    return (
      <div className="App">

        <Navbar />
        <Route exact path="/" render={Welcome} />

        <Route path="/details" render={(props) => (
            <Details {...props}
              handleChange={this.handleChange}
              inputVal={this.state.inputVal}
              handleSubmitForDesc={this.handleSubmitForDesc}
              getCompanyData={this.getCompanyData}/>
          )} />

        <Route path="/details/:stock" render={(props) => {
            return(
              <CompanyDetails {...props}
                getCompanyData={this.getCompanyData}
                companyData={this.state.companyData}
                showRelevant={this.handleRelevantClick}
                getChartData={this.getChartData}
                chartData={this.state.chartData}
                handleChange={this.handleChange}
                selectedChart={this.state.selectChart}
                />
            )
          }}
          />

        <Route path="/MyStocks" render={(props) => {
            return(
              <StockList
                {...props}
                handleSubmit={this.handleSubmit}
                handleSubmitForDesc={this.handleSubmitForDesc}
                handleChange={this.handleChange}
                inputVal={this.state.inputVal}
                stockList={this.state.stockList}
                removeStockFromFeed={this.removeStockFromFeed}
                />
            )
          }} />

        <Route path="/ipo" render={(props) => {
            return(
              <UpcomingIpos
                {...props}
                getIpoData={this.getIpoData}
                ipoData={this.state.ipoData}
                />
            )
          }} />

        <Route path="/movers" render={(props) => {
              return(
                <BigMovers
                  {...props}
                  getMoverData={this.getMoverData}
                  moverData={this.state.moverData}
                  />
              )
            }} />

      </div>
    );
  }
}

export default withRouter(App);
