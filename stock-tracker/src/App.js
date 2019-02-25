import React, { Component } from 'react';
import './App.css';
import DisplayData from './components/DisplayData';

class App extends Component {
  constructor(){
    super()

    this.state = {
      tickers: ['aapl', 'snap', 'amd', 'drys', 'fb']
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Your Stocks</h1>
        <DisplayData tickers={this.state.tickers}/>
      </div>
    );
  }
}

export default App;
