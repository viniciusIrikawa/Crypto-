const Navbar = () => {
  return (
    <nav className='flex md:flex-row flex-col justify-between items-center bg-[#000000b0] py-8 px-20 text-white-low'>
        <h2 className='font-bold text-2xl'>Crypto <span className='text-crypto-purple text-2xl'>+</span></h2>
        <ul className='flex items-center text-sm cursor-pointer font-bold md:mt-0 mt-5'>
          <li className='mx-3 uppercase md:text-sm text-xs'> Criptomoedas </li>
          <li className='mx-3 uppercase md:text-sm text-xs'> NFT's </li>
          <li className='mx-3 uppercase md:text-sm text-xs'> Sobre </li>
          <li className='mx-3 uppercase md:text-sm text-xs'> Blog </li>
          <li className='mx-3 uppercase bg-crypto-purple px-7 py-2 rounded-sm'> 
            <a href="/dashboard/BTCUSDT"> Trade! </a>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar