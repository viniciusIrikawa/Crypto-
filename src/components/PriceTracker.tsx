import React, { useEffect, useState } from 'react'

const PriceTracker = () => {
    const [price, setPrice] = useState<number | undefined>();

  useEffect(() => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/btcusdt@trade`);
    ws.onopen = () => {
        console.log('Connected');
    }

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setPrice(parseFloat(data.p))
    }

    ws.onclose = () => {
        console.log('WebSocket disconnected');
      };

      return () => {
        ws.close();
    };

  }, []);

  return (
    <div className='text-white font-bold'>
        {price?.toFixed(2)}
    </div>
  )
}

export default PriceTracker