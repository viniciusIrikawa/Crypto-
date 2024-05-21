import { useEffect, useState } from "react";
import Table from "./Table";
import { PriceData } from "../Types/price";
import { initConnection } from "../services/websocket";

const CryptoListings = () => {
  const [prices, setPrices] = useState<{ [pair: string]: PriceData }>({});

  useEffect(() => {
    initConnection(setPrices);
  }, []);

  return (
    <div className="">
      <Table prices={prices}/>
    </div>
  );
};

export default CryptoListings;
