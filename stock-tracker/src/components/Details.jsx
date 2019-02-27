import React, { Component } from 'react';

// class Details extends Component {
//   constructor(props){
//     super(props)
//
//     this.state = {
//       currentStock: {}
//     };
//   }
//
//   render(){
//     return (
//       <div className="details">
//         <p>This is the details Page</p>
//         <form onSubmit={(e) => this.props.handleSubmitForDesc(e)}>
//           <label htmlFor="detailInput">Ticker: </label>
//           <input name="inputVal" id="detailInput" type="text" value={this.props.inputVal} onChange={this.props.handleChange} />
//           <input type="submit" value="View" />
//         </form>
//       </div>
//     );
//   }
// }

export default (props) => (

  <div className="details">
    <p>This is the details Page</p>
    <form onSubmit={(e) => props.handleSubmitForDesc(e)}>
      <label htmlFor="detailInput">Ticker: </label>
      <input name="inputVal" id="detailInput" type="text" value={props.inputVal} onChange={props.handleChange} />
      <input type="submit" value="View" />
    </form>
  </div>
  )

//not updating app state with input
