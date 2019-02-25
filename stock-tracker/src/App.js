import React, { Component } from 'react';
import './App.css';
import {
  getIEX,
  getAV
} from './services/fetchData';
import DisplayData from './components/DisplayData';
import getStockInfo from './services/websocket.js';
import openSocket from 'socket.io-client';

class App extends Component {
  constructor(){
    super()
    this.state = {
      respData: {empty: 'object'}
    }
  }

  respCallback(data) {
    console.log(data);
  }

callStocks() {
  const url = 'https://ws-api.iextrading.com/1.0/tops'
  const socket = require('socket.io-client')(url)
  socket.on('message', message => this.setState({
    respData: JSON.parse(message)
  }))
  socket.on('connect', () => {
    socket.emit('subscribe', 'snap');
  })
}

 componentDidMount() {
  this.callStocks();
  }

  render() {
    return (
      <div className="App">
        <h1>Socket Test</h1>
        <DisplayData data={this.state.respData} />
        <h1>quickStocks</h1>
        <h3>Description</h3>
        <p>quickStocks is meant to give users a hub for all things stock. A user may search for stocks and add/remove tickers to a collection. All stocks in a user's collection will continously update with the latest price and percent up or down for the day. A user may view more information on a stock including a real time graph with multiple data settings (timeframe, technical indicators, etc)</p>
        <h3>Potential Problems</h3>
        <ol>
          <li>Graph</li>
          <li>API's and limits on calls</li>
          <li>Input validation</li>
        </ol>
        <h3>Potential Solutions</h3>
        <ol>
        <li>Third party libraries</li>
        <li>I assume there shouldn't be limits on a stock api. Otherwise I will need to find a method to limit the updates</li>
        <li>Not sure. Will have to learn. If i had to right now with what I know, I'd try to find a list of all valid tickers save an array/string of them to check against the input in order to submit </li>
      </ol>
      <h3>API's</h3>
      <p><a href="https://iextrading.com/developer/docs/#getting-started">IEX</a></p>
      <p><a href="https://www.alphavantage.co/documentation/">AlphaVantage</a></p>
      <h3>MVP</h3>
      <ul>
        <li>User input for ticker</li>
        <li>Add ticker to visible list</li>
        <li>On list, display latest price and percent change on day</li>
      </ul>
      <h3>Post-MVP</h3>
      <ul>
      <li>Detailed stock view with graph and more information (related stocks, news)</li>
      <li>Keep updating to keep up with latest price</li>
      <li>Upcoming IPO's tab</li>
      <li>Add to graph complexity (technical indicator overlays, different time stretches, etc (ton of data to work with))</li>
      </ul>
      </div>
    );
  }
}

export default App;
