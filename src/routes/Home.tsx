import Navbar from "../components/Navbar";
import BitcoinLabel from "../components/cryptos/BitcoinLabel";
import EthereumLabel from "../components/cryptos/EthereumLabel";
import TetherLabel from "../components/cryptos/TetherLabel";

const Home = () => {
  return (
    <>
      <section className="bg-img-home bg-cover bg-center">
        <Navbar />
        <div className="ms:h-[90vh] h-auto flex md:flex-row flex-col justify-center items-center">
          <div className="text-white-low md:w-[30vw] md:mt-0 mt-10 w-[90vw] p-10 rounded-xl bg-gradient-to-b from-[#2c0336] to-[#610378db]">
            <h2 className="text-2xl font-normal"> Welcome to </h2>
            <h2 className="font-bold text-6xl mb-5">
              Crypto <span className="text-crypto-purple text-6xl"> + </span>
            </h2>
            <p className="font-normal leading-5">
              Explore, trade and acquire cryptocurrencies and NFTs on a secure and intuitive platform. Join us!
            </p>
            <button className="px-10 py-2 mt-5 rounded-md bg-crypto-purple shadow shadow-crypto-purple uppercase font-bold text-sm">
              Create Account
            </button>
          </div>

          <div className="relative md:w-1/2 w-full md:ml-20 flex items-center justify-center">
            <img
              src="/blockchain-vector.png"
              alt=""
              width={0}
              className="z-10 md:w-4/5 w-full"
            />
            <BitcoinLabel />
            <EthereumLabel />
            <TetherLabel />
          </div>
        </div>
        <section className="bg-[#202020] py-20">
          <div className="md:ml-16 ml-3">
            <h1 className="md:text-3xl text-2xl text-white-low font-bold"> Real-Time Dashboard </h1>
            <p className="text-[#a1a1a1] mt-2 mb-5"> View real-time cryptocurrency charts and information via the dashboard. </p>
            {/* desktop view */}
            <a href="/dashboard/BTCUSDT" className='md:inline-block hidden uppercase bg-crypto-purple px-7 py-2 rounded-sm bold text-white'> Trade! </a>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-around mt-10">
            <img src="/dashboard_desktop.jpg" alt="Dashboard desktop view" className="md:w-[70%] w-[95%] border-8 border-[#2e2e2e] rounded-lg"/>
            <img src="/phone_mockup.png" alt="Dashboard mobile view" className="md:w-[15%] w-[30%] md:mt-0 mt-10 rounded-lg"/>
          </div>
          {/* mobile view */}
          <div className="md:hidden w-full flex justify-center mt-16">
            <a href="/dashboard/BTCUSDT" className='mx-3 uppercase bg-crypto-purple px-7 py-2 rounded-sm bold text-white md:ml-16'> Trade! </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
