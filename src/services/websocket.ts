import { Dispatch, SetStateAction } from 'react';
import { io } from 'socket.io-client';
import { PriceData } from '../Types/price';

interface Prices {
    [pair: string]: PriceData;
}

export const initConnection = (setPrices: Dispatch<SetStateAction<Prices>>) => {
    const socket = io("http://localhost:3000");
   
    socket.on("priceUpdate", (data: { pair: string, price: number }) => {
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
    }
}
