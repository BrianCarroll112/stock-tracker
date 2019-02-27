import React, { Component } from 'react';

class UpcomingIpos extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getIpoData();
  }

  render(){  
    return(
      <p>{JSON.stringify(this.props.ipoData)}</p>
    )
  }
}

export default UpcomingIpos;
