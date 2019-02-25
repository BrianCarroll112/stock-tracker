import React from 'react';

export default (props) => {
  console.log(props.data)
  return(
    <div>
      <p>Last Sale Price: {props.data.lastSalePrice}</p>
      <p>Ask Price: {props.data.askPrice} Size: {props.data.askSize}</p>
      <p>Bid Price: {props.data.bidPrice} Size: {props.data.bidSize}</p>
    </div>
  )
}
