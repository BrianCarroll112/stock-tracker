import React, { Component } from 'react';

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
