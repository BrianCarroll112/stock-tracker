import React, { Component } from 'react';

class UpcomingIpos extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <p>{JSON.stringify(this.props.ipoData)}</p>
    )
  }
}

export default UpcomingIpos;
