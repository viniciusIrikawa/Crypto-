import { useEffect, useState } from "react";
import Table from "./Table";
import { io } from "socket.io-client";
import { PriceData } from "../Types/price";

const CryptoListings = () => {
  const [prices, setPrices] = useState<{ [pair: string]: PriceData }>({});

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("priceUpdate", (data: { pair: string, price: number }) => {
      setPrices((prevPrices) => {
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
  }, []);

  return (
    <div className="">
      <Table prices={prices}/>
    </div>
  );
};

export default CryptoListings;
