import axios from 'axios';

const fetchDetailData = async (stock) => {
  const resp = await axios(`https://api.iextrading.com/1.0/stock/${stock}/batch?types=quote,news,chart,company&range=1m&last=10`)
  return resp.data
}
const fetchIpoData = async () => {
  const resp = await axios(`https://api.iextrading.com/1.0/stock/market/upcoming-ipos`);
  return resp.data
}
const fetchMoverData = async () => {
  const respLosers = await axios(`https://api.iextrading.com/1.0/stock/market/list/losers`);
  const respGainers = await axios(`https://api.iextrading.com/1.0/stock/market/list/gainers`);
  const moversObj = {
    losers: respLosers.data,
    gainers: respGainers.data
  }
  return moversObj
}



export {
  fetchDetailData,
  fetchIpoData,
  fetchMoverData
}
