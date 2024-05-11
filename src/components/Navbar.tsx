const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-[#000000b0] py-8 px-20 text-white-low'>
        <h2 className='font-bold text-2xl'>Crypto <span className='text-crypto-purple text-2xl'>+</span></h2>
        <ul className='flex text-sm cursor-pointer font-bold'>
          <li className='mx-3 uppercase'> Cryptocurrencies </li>
          <li className='mx-3 uppercase'> NFT's </li>
          <li className='mx-3 uppercase'> About </li>
          <li className='mx-3 uppercase'> Blog </li>
        </ul>
    </nav>
  )
}

export default Navbar