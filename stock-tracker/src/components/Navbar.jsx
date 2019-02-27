import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <header>
    <nav>
      <Link to="/MyStocks">My Stocks</Link>
      <Link to="/details">Details</Link>
      <Link to="/movers">Movers</Link>
      <Link to="/ipo">Upcoming IPO's</Link>
    </nav>
  </header>
)
