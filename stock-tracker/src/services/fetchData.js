import axios from 'axios';

const getIEX = async () => {
  const resp = await axios('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5');
  return resp.data;
}

const getAV = async () => {
  const resp = await axios('https://www.alphavantage.co/query?function=SMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=0OVJ9ET5HHBSTREZ');
  return resp.data;
}

export {
  getIEX,
  getAV
}
