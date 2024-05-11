import React from 'react'

const Welcome = () => {
  return (
    <div className='h-[90vh] text-white-low relative'>
        <div className='w-[30vw] absolute top-44 left-40 p-10 rounded-xl bg-gradient-to-b from-[#2c0336] to-[#610378db]'>
            <h2 className='text-2xl font-normal'> Welcome to </h2>
            <h2 className='font-bold text-6xl mb-5'>Crypto <span className='text-crypto-purple text-6xl'> + </span></h2>
            <p className='font-normal leading-5'> Explore, trade, and collect cryptocurrencies and NFT's on a secure and intuitive platform. Join us today! </p>
            <button className='px-10 py-2 mt-5 rounded-md bg-crypto-purple shadow shadow-crypto-purple uppercase font-bold text-sm'> Create Account </button>
        </div>
    </div>
  )
}

export default Welcome