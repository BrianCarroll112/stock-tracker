import React from 'react';
import Stock from './Stock'

export default (props) => {
  console.log(props)
  return(
    <div>
      {props.tickers.map(e => (
        <Stock key={e} ticker={e} />
      ))}
    </div>
  )
}
