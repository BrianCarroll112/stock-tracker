import openSocket from 'socket.io-client';
const socket = openSocket('https://ws-api.iextrading.com/1.0/tops?symbols=snap');

const getStockInfo =  (cb) => {
    socket.on('subscribe', (data) => cb(data));
    socket.emit('subscribe', 'snap');
  };

export default {
  getStockInfo
}
