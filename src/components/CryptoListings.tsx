import { useEffect, useState } from "react";
import Table from "./Table";
import { cryptoList } from "../constants/constants";

const CryptoListings = () => {
  const [prices, setPrices] = useState<{ [pair: string]: number }>({});

  const subscribe = (pairs: string[]) => {
    const sockets: { [pair: string]: WebSocket } = {};

    pairs.forEach((pair) => {
      const ws = new WebSocket(
        `wss://stream.binance.com:9443/ws/${pair.toLowerCase()}@trade`
      );

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setPrices((prevPrices) => ({
          ...prevPrices,
          [pair]: parseFloat(data.p),
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
    <div className="h-[80vh] py-20 px-10">
      <h1 className="text-3xl text-white-low font-bold "> Crypto Listings </h1>
      <Table prices={prices}/>
    </div>
  );
};

export default CryptoListings;
