# quickStocks

https://quickStocks.surge.sh

## Project Description

quickStocks is meant to give users a hub for all things stock. A user may search for stocks and add/remove tickers to a collection. All stocks in a user's collection will continously update with the latest price and percent up or down for the day. A user may view more information on a stock including news, related tickers, and a price chart with several settings.


## Wireframes

Link to Wireframes.

### MVP/PostMVP

#### MVP

- Ability to add/remove stocks to/from collection
- View realtime price data

#### PostMVP EXAMPLE

- More Details page including news, chart, relevant companies.
- Movers page showing IEX's gainers and losers list endpoints.
- Upcoming IPO page from IEX ipo endpoint displaying relevant information on the companies.
- Interconnectivity between pages - see details from list, add to list from details, both from movers.

## React Component Hierarchy

Define the the React components and the architectural design of your app.

## Additional Libraries
- ReactChartkick and Chart.js for displaying graph in details page
- socket.io to connect to IEX websocket

## Code Snippet

I wanted to display the stock data on your list in real time. To do this I researched websockets and utilized IEX's compatibility with socket.io.

```
getStockFeed(stock) {
  const url = 'https://ws-api.iextrading.com/1.0/tops'
  const socket = require('socket.io-client')(url)
  socket.on('message', message => {
    const stockDataObj = JSON.parse(message);
    const currentTicker = stockDataObj.symbol;

    this.setState(prevState => ({
      tickers: [...prevState.tickers, currentTicker],
      stockList: {
        ...prevState.stockList,
        [currentTicker]: stockDataObj
      }}));
  });

  socket.on('connect', () => {
    socket.emit('subscribe', stock);
  })
  this.setState({
    socket: socket
  })
}

addStockToFeed(stock) {
  this.state.socket.emit('subscribe', stock)
}

async removeStockFromFeed(stock) {
  await this.state.socket.emit('unsubscribe', stock)
  this.setState(prevState => {
    const stockList = Object.keys(prevState.stockList).reduce((object,key) => {
      if (key !== stock) {
        object[key] = prevState.stockList[key]
      }
      return object
    }, {});
    return ({
      stockList
    })
  })
}

```

## Issues and Resolutions

**PROBLEM**: Chart staying with previous company data when changing to new company view                              
**RESOLUTION**: Use method for setting chart state within input submits and relevant ticker onClicks

**PROBLEM**: Didn't want to make tons of API calls on intervals to keep stockdata up to date
**RESOLUTION**: Learned websockets
