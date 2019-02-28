import React, { Component } from 'react';
import Mover from './Mover'

class BigMovers extends Component {

  calcPercent(e){
    const open = e.open;
    const current = e.latestPrice;
    return ((current - open) / open).toFixed(4);
  }

  componentDidMount(){
    this.props.getMoverData();
  }

  render(){
    return(
      <div>
        <h1>Gainers</h1>
        <div className="gainers-container-div">
          {
            this.props.moverData.gainers.map(e =>(
            <Mover
              key={e.symbol}
              company={e}
              percent={this.calcPercent(e)}
               />
          ))}
        </div>
        <h2>Losers</h2>
        <div className="losers-container-div">
          {this.props.moverData.losers.map(e =>(
            <Mover
              key={e.symbol}
              company={e}
              percent={this.calcPercent(e)}
                  />
          ))}
      </div>
    </div>

    )
  }
}

export default BigMovers;
