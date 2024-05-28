import { ICryptoData } from "../Types/cryptoData";

export const fetchCryptoData = (pair: string): Promise<ICryptoData> => {
    return fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${pair}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data as ICryptoData;""
      })
      .catch(error => {
        console.error(`Erro ao obter volume de 24h para ${pair}: ${error}`);
        throw error;
      });
  }
