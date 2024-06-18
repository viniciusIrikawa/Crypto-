import { Dispatch, SetStateAction } from 'react';
import { io } from 'socket.io-client';
import { PriceData } from '../Types/price';

interface Prices {
    [pair: string]: PriceData;
}

export const initConnection = (setPrices: Dispatch<SetStateAction<Prices>>) => {
  const socket = io(`${import.meta.env.VITE_API_KEY}`);  

  socket.on("priceUpdate", (data: { pair: string, price: number, sentTimestamp: number }) => {
    //   const receiveTimestamp = Date.now();
    //   const latency = receiveTimestamp - data.sentTimestamp;
    //   console.log(`Latência para ${data.pair}: ${latency}ms`);
      
      setPrices((prevPrices: Prices) => {
          const previousPrice = prevPrices[data.pair] ? prevPrices[data.pair].price : data.price;
          const color = data.price > previousPrice ? 'text-green-500' : 'text-red-500';
          return {
              ...prevPrices,
              [data.pair]: { price: data.price, color: color },
          };
      });
  });

  return () => {
      socket.disconnect();
  };
};