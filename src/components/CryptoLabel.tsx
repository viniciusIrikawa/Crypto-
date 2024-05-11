import React from 'react'

const CryptoLabel = () => {
  return (
    <article className='bg-white-low flex items-center justify-center max-w-[120px] py-2 px-5 rounded-md absolute top-40 left-10 z-20 shadow-lg shadow-[#000000b3]'>
        <img src="/crypto_icons/btc.svg" alt="" width={25}/>
        <span className='ml-2'> Bitcoin </span>
    </article>
  )
}

export default CryptoLabel