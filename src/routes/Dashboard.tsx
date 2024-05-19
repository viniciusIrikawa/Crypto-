import { useEffect, useRef, memo } from 'react';
import CryptoListings from '../components/CryptoListings';
import { useParams } from 'react-router-dom';
import OrderButtons from '../components/OrderButtons';
import TimeInterval from '../components/TimeInterval';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement | null>(null);

  const params = useParams();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "750",
          "symbol": "${params.symbol}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "backgroundColor": "rgba(32, 32, 32, 1)",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current?.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container flex" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className='px-5'>
        <CryptoListings/>
        <TimeInterval/>
        <OrderButtons/>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
