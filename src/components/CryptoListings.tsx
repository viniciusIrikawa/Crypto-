import React from 'react'

const CryptoListings = () => {
  return (
    <div className='h-[80vh] text-white py-20 px-10'>
        <h1 className='text-3xl font-bold '> Crypto Listings </h1>
        <div className='my-20 h-full flex flex-row items-start justify-center'>
            <table className='border-[2px] border-white-low w-[40vw] text-white-low'>
                <thead className='bg-white-low text-black'>
                    <tr>
                        <th> Cryptocurrency </th>
                        <th> Mark Price </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-10 py-2'> Bitcoin </td>
                        <td className='px-10 py-2'> 123 </td>
                    </tr>
                    <tr>
                        <td className='px-10 py-2'> Ethereum </td>
                        <td className='px-10 py-2'> 321 </td>
                    </tr>
                    <tr>
                        <td className='px-10 py-2'> Solana </td>
                        <td className='px-10 py-2'> 123 </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CryptoListings