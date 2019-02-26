import React, { Component } from 'react';

class Details extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentStock: {}
    };
  }

  render(){
    return (
      <div className="details">
        <p>This is the details Page</p>
      </div>
    );
  }
}

export default Details;
