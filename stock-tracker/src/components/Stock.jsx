import React, { Component } from 'react';

class Stock extends Component {
  constructor(props){
    super(props)

    this.state = {
      respData: {}
    }
  }

  getStockFeed(stock) {
    const url = 'https://ws-api.iextrading.com/1.0/tops'
    const socket = require('socket.io-client')(url)
    socket.on('message', message => {
      this.setState({
        respData: JSON.parse(message)
    })})
    socket.on('connect', () => {
      socket.emit('subscribe', stock);
    })
  }

  componentDidMount(){
    this.getStockFeed(this.props.ticker)
  }

  render() {
    return(
      <div className="stock-row">
        <h3>{this.props.ticker}</h3> <p>Last: {this.state.respData.lastSaleSize} @ {this.state.respData.lastSalePrice}</p>
        <p>Ask: {this.state.respData.askSize} @ {this.state.respData.askPrice}</p>
        <p>Bid: {this.state.respData.bidSize} @ {this.state.respData.bidPrice}</p>
    </div>
    )
  }
}

export default Stock;
