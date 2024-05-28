import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchCryptoData } from '../services/BinanceCryptoData';
import { ICryptoData } from '../Types/cryptoData';

const CryptoData = () => {
    const [cryptoData, setCryptoData] = useState<ICryptoData>();
    const params = useParams();
    
    const fetchData = async () => {
      try {
        const crypto = await fetchCryptoData(params.symbol!);
        setCryptoData(crypto);
      } catch (error) {
        console.error(error);
      }
    };
  
    console.log(cryptoData);
  
    useEffect(() => {
      fetchData(); 
  
      const intervalId = setInterval(() => {
        fetchData(); 
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, [params.symbol]);

    
  return (
    <div className='flex justify-around mt-3'>
        <div className=''>
            <p className='font-normal text-xs text-[#bfbfbf]'> Volume 24h</p>
            <small className='text-sm text-white-low'>  {cryptoData?.volume ? Number(cryptoData.volume).toFixed(2) : '-'} </small>
        </div>
        <div className=''>
            <p className='font-normal text-xs text-[#bfbfbf]'> Maior Preço 24h </p>
            <small className='text-sm text-white-low'>  {cryptoData?.highPrice ? Number(cryptoData.highPrice).toFixed(2) : '-'} </small>
        </div>
        <div className=''>
            <p className='font-normal text-xs text-[#bfbfbf]'> Menor Preço 24h </p>
            <small className='text-sm text-white-low'>  {cryptoData?.lowPrice ? Number(cryptoData.lowPrice).toFixed(2) : '-'} </small>
        </div>
    </div>
  )
}

export default CryptoData