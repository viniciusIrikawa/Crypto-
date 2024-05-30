const BitcoinLabel = () => {
  return (
    <article className='bg-white-low flex items-center justify-center max-w-[120px] py-2 px-5 rounded-md absolute md:top-40 top-20 md:left-20 left-5 z-20 shadow-lg shadow-[#000000b3]'>
        <img src="/crypto_icons/btc.svg" alt="" width={25}/>
        <span className='ml-2'> Bitcoin </span>
    </article>
  )
}

export default BitcoinLabel