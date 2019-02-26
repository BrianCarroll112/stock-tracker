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
      tickers: ['aapl', 'snap', 'amd', 'msft', 'fb']
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Welcome />
        <Details />
        <StockList tickers={this.state.tickers} />
      </div>
    );
  }
}

export default App;
