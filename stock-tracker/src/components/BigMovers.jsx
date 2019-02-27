import React, { Component } from 'react';

class BigMovers extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getMoverData();
  }

  render(){
    return(
      <p>{JSON.stringify(this.props.moverData)}</p>
    )
  }
}

export default BigMovers;
