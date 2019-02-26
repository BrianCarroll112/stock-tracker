import React from 'react';
import Stock from './Stock'

export default (props) => {
  return(
    <div>
      {props.tickers.map(e => (
        <Stock key={e} ticker={e} />
      ))}
    </div>
  )
}
