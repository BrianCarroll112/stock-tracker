import React, { Component } from 'react';
import Ipo from './Ipo'

class UpcomingIpos extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getIpoData();
  }

  render(){
    return(
      <div className="ipo-container-div">
        {this.props.ipoData.map(e => (
          <Ipo key={e.symbol} company={e} />
        ))}
      </div>
    )
  }
}

export default UpcomingIpos;
