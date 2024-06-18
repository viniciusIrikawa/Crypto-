import { PriceData } from "../Types/price";
import { useParams } from "react-router-dom";

const Table = ({ prices }: { prices: { [pair: string]: PriceData } }) => {

  const { symbol } = useParams();

  return (
    <div className="mt-10 md:mb-0 mb-10 h-[50vh] md:w-fit w-full flex flex-row items-start justify-center overflow-y-auto">
      <table className="md:w-[20vw] w-full text-white-low">
        <thead className="text-white-low text-xs">
          <tr className="font-bold-600 text-[#878787] text-left">
            <th> Cryptocurrency </th>
            <th> Price </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(prices).map(([pair, data]) => (          
            <tr key={pair} className={pair === symbol ? 'bg-[#2e2e2e]' : ''}>
              <td className="px-4 py-2">{pair}</td>
              <td className={`px-4 py-2 ${data.color}`}>
                $ {data.price.toFixed(2)}
              </td>
              <td> 
                <a className={`bg-[#393939] px-2 py-1 rounded-sm cursor-pointer ${pair === symbol && 'pointer-events-none'}`}
                   href={`/dashboard/${pair}`}> Trade </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
