interface Prices {
    [pair: string]: number
}

const Table = ({ prices }: { prices: Prices }) => {
  return (
    <div className="my-20 h-full flex flex-row items-start justify-center">
      <table className="w-[20vw] text-white-low">
        <thead className="text-white-low text-xs">
          <tr className="font-bold-600 text-[#878787] text-left">
            <th> Cryptocurrency </th>
            <th> Price </th>
          </tr>
        </thead>
        <tbody>
            {Object.entries(prices).map(([pair, price]) => (
                <tr key={pair}>
                    <td className="py-2"> {pair} </td>
                    <td className="py-2"> $ {price} </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
