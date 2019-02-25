import React, { Component } from 'react';

class Stock extends Component {
  constructor(props){
    super(props)

    this.state = {
      respData: {}
    }
  }
  callStocks(stock) {
    const url = 'https://ws-api.iextrading.com/1.0/tops'
    const socket = require('socket.io-client')(url)
    socket.on('message', message => {
      console.log(this.props.ticker, this.state)
      this.setState({
        respData: JSON.parse(message)
    })})
    socket.on('connect', () => {
      socket.emit('subscribe', stock);
    })
  }

  componentDidMount(){
    this.callStocks(this.props.ticker)
  }

  render() {
    return(
      <div className="stock-row">
        <p>{this.props.ticker}</p> <p>Last Price: {this.state.respData.lastSalePrice}</p>
      </div>
    )
  }
}

export default Stock;
