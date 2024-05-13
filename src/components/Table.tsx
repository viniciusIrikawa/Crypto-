interface Prices {
    [pair: string]: number
}

const Table = ({ prices }: { prices: Prices }) => {
  return (
    <div className="my-20 h-full flex flex-row items-start justify-center">
      <table className="border-[2px] border-white-low w-[40vw] text-white-low">
        <thead className="bg-white-low text-black">
          <tr>
            <th> Cryptocurrency </th>
            <th> Mark Price </th>
          </tr>
        </thead>
        <tbody>
            {Object.entries(prices).map(([pair, price]) => (
                <tr key={pair}>
                    <td className="px-10 py-2"> {pair} </td>
                    <td className="px-10 py-2"> {price} </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
