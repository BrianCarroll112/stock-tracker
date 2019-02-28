import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <nav>
    <ul>
      <li><Link to="/MyStocks" onClick={(e) => props.handleActiveButtonColor(e) }>My Stocks</Link></li>
      <li><Link to="/details" onClick={(e) => props.handleActiveButtonColor(e) }>Details</Link></li>
      <li><Link to="/movers" onClick={(e) => props.handleActiveButtonColor(e) }>Movers</Link></li>
      <li><Link to="/ipo" onClick={(e) => props.handleActiveButtonColor(e) }>Upcoming IPO's</Link></li>
    </ul>
  </nav>
)
