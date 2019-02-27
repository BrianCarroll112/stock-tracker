import React, { Component } from 'react';
import Ipo from './Ipo'

class UpcomingIpos extends Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){
    await this.props.getIpoData();
    console.log(this.props.ipoData)
  }

  render(){
    return(
      <div className="ipo-container-div">
        {this.props.ipoData.map(e => (
          <Ipo company={e} />
        ))}
      </div>
    )
  }
}

export default UpcomingIpos;
