import CryptoListings from "../components/CryptoListings";
import Navbar from "../components/Navbar";
import BitcoinLabel from "../components/cryptos/BitcoinLabel";
import EthereumLabel from "../components/cryptos/EthereumLabel";
import TetherLabel from "../components/cryptos/TetherLabel";

const Home = () => {
  return (
    <>
      <section className="bg-img-home bg-cover bg-center">
        <Navbar />
        <div className="h-[90vh] flex md:flex-row flex-col justify-center items-center">
          <div className="text-white-low md:w-[30vw] w-[90vw] p-10 rounded-xl bg-gradient-to-b from-[#2c0336] to-[#610378db]">
            <h2 className="text-2xl font-normal"> Bem-vindo à </h2>
            <h2 className="font-bold text-6xl mb-5">
              Crypto <span className="text-crypto-purple text-6xl"> + </span>
            </h2>
            <p className="font-normal leading-5">
              Explore, negocie e adquira criptomoedas e NFT's numa plataforma segura e intuitiva. Junte-se a nós!
            </p>
            <button className="px-10 py-2 mt-5 rounded-md bg-crypto-purple shadow shadow-crypto-purple uppercase font-bold text-sm">
              Criar conta
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
          <h1 className="ml-24 text-3xl text-white-low font-bold "> Crypto Listings </h1>
          <CryptoListings />
        </section>
      </section>
    </>
  );
};

export default Home;
