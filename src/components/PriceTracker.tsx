import { useEffect, useState } from 'react';
import { cryptoList } from '../constants/constants';

const PriceTracker = () => {
    const [prices, setPrices] = useState<{ [pair: string]: number }>({});

    const subscribe = (pairs: string[]) => {
        const sockets: { [pair: string]: WebSocket } = {};

        pairs.forEach(pair => {
            const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${pair.toLowerCase()}@trade`);
    
            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                setPrices(prevPrices => ({
                    ...prevPrices,
                    [pair]: parseFloat(data.p)
                }));
            }
            
            sockets[pair] = ws;
        });

        return () => {
            Object.values(sockets).forEach(ws => {
                ws.close();
            });
        };
    }

    useEffect(() => {
        const unsubscribe = subscribe(cryptoList);
        return unsubscribe;
    }, []);

    return (
        <div className='text-white font-bold'>
            {Object.entries(prices).map(([pair, price]) => (
                <div key={pair}>
                    {pair}: {price?.toFixed(2)}
                </div>
            ))}
        </div>
    );
}

export default PriceTracker;
