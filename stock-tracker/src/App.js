import React, { Component } from 'react';
import './App.css';
import StockList from './components/StockList';
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Details from './components/Details'

class App extends Component {
  constructor(){
    super()

    this.state = {
      tickers: [],
      socket: {},
      stockList: {}
    };
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

  removeStockFromFeed(stock) {
    this.state.socket.emit('unsubscribe', stock)
  }


  async componentDidMount(){
    await this.getStockFeed('aapl');
    setTimeout(()=>{this.addStockToFeed('goog')},5000);
    setTimeout(()=>{this.removeStockFromFeed('aapl')}, 10000);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Welcome />
        <Details />
        <StockList stockList={this.state.stockList} />
      </div>
    );
  }
}

export default App;
