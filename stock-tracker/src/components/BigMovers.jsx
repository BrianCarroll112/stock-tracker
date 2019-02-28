import React, { Component } from 'react';
import Mover from './Mover'

class BigMovers extends Component {
  constructor(props){
    super(props)
  }

  calcPercent(e){
    const open = e.open;
    const current = e.latestPrice;
    return ((current - open) / open).toFixed(4);
  }

  async componentDidMount(){
    await this.props.getMoverData();
    console.log(this.props.moverData);
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
