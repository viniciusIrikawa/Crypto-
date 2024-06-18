const Navbar = () => {
  return (
    <nav className='flex md:flex-row flex-col md:justify-between justify-around items-center bg-[#000000b0] py-8 md:px-20 px-10 text-white-low'>
        <div className="md:hidden w-full flex flex-row justify-between">
          <h2 className='font-bold text-2xl'>Crypto <span className='text-crypto-purple text-2xl'>+</span></h2>
          {/* mobile view */}
          <div className="uppercase bg-crypto-purple px-7 py-2 rounded-sm font-bold">
            <a href="/dashboard/BTCUSDT"> Trade! </a>
          </div>
        </div>
        <h2 className='md:block hidden font-bold text-2xl'>Crypto <span className='text-crypto-purple text-2xl'>+</span></h2>
        <ul className='flex items-center text-sm cursor-pointer font-bold md:mt-0 mt-5'>
          <li className='mx-3 uppercase md:text-sm text-xs'> Cryptocurrencies </li>
          <li className='mx-3 uppercase md:text-sm text-xs'> NFT's </li>
          <li className='mx-3 uppercase md:text-sm text-xs'> About </li>
          <li className='mx-3 uppercase md:text-sm text-xs'> Blog </li>
          {/* dektop view */}
          <li className='md:block hidden mx-3 uppercase bg-crypto-purple px-7 py-2 rounded-sm'> 
            <a href="/dashboard/BTCUSDT"> Trade! </a>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar