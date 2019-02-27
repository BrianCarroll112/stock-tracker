import React, { Component } from 'react';

class CompanyDetails extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h1>{this.props.match.params.stock}</h1>
    )
  }
}

export default CompanyDetails
