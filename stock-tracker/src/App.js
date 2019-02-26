import React, { Component } from 'react';
import './App.css';
import StockList from './components/StockList';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Details from './components/Details';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';


class App extends Component {
  constructor(){
    super()

    this.state = {
      tickers: [],
      socket: {},
      stockList: {},
      inputVal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeStockFromFeed = this.removeStockFromFeed.bind(this);
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

  componentDidMount(){
    this.getStockFeed('aapl')
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" render={Welcome} />
        <Route path="/details" render={(props) => (
            <Details {...props} />
          )} />
        <Route path="/MyStocks" render={(props) =>{
            return(
              <StockList
                {...props}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                inputVal={this.state.inputVal}
                stockList={this.state.stockList}
                removeStockFromFeed={this.removeStockFromFeed}
                />
            )
          }} />

      </div>
    );
  }
}

export default withRouter(App);
