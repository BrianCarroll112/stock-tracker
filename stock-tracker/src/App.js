import React, { Component } from 'react';
import './App.css';
import StockList from './components/StockList';
import Navbar from './components/Navbar'

class App extends Component {
  constructor(){
    super()

    this.state = {
      tickers: ['aapl', 'snap', 'amd', 'msft', 'fb']
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Your Stocks</h1>
        <StockList tickers={this.state.tickers} />
      </div>
    );
  }
}

export default App;
