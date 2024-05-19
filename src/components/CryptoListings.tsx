import { useEffect, useState } from "react";
import Table from "./Table";
import { cryptoList } from "../constants/constants";
import { PriceData } from "../Types/price";

const CryptoListings = () => {
  const [prices, setPrices] = useState<{ [pair: string]: PriceData }>({});
  const [previousPrices, setPreviousPrices] = useState<{ [pair: string]: number }>({});


  const subscribe = (pairs: string[]) => {
    const sockets: { [pair: string]: WebSocket } = {};

    pairs.forEach((pair) => {
      const ws = new WebSocket(
        `wss://stream.binance.com:9443/ws/${pair.toLowerCase()}@trade`
      );

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const currentPrice = parseFloat(data.p);
        setPrices((prevPrices: any) => {
          const previousPrice = prevPrices[pair] ? prevPrices[pair].price : currentPrice;
          const color = currentPrice > previousPrice ? 'text-green-500' : 'text-red-500';
          return {
            ...prevPrices,
            [pair]: { price: currentPrice, color: color },
          };
        });
        setPreviousPrices((prevPreviousPrices) => ({
          ...prevPreviousPrices,
          [pair]: currentPrice,
        }));
      };

      sockets[pair] = ws;
    });

    return () => {
      Object.values(sockets).forEach((ws) => {
        ws.close();
      });
    };
  };

  useEffect(() => {
    const unsubscribe = subscribe(cryptoList);
    return unsubscribe;
  }, []);

  return (
    <div className="">
      <Table prices={prices}/>
    </div>
  );
};

export default CryptoListings;
