import React from 'react';

export default (props) => (

  <div className="details">
    <form onSubmit={(e) => props.handleSubmitForDesc(e)}>
      <label htmlFor="detailInput">Ticker: </label>
      <input name="inputVal" id="detailInput" type="text" value={props.inputVal} onChange={props.handleChange} />
      <input type="submit" value="View" />
    </form>
  </div>
  )
