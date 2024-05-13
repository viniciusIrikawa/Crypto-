import './App.css';
import CryptoListings from './components/CryptoListings';
import Navbar from './components/Navbar';
import PriceTracker from './components/PriceTracker';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
    <div className=''>
      <section className='bg-img-home bg-cover bg-center'>
        <Navbar/>
        <Welcome/>
      </section>
      <section>
        <CryptoListings/>
      </section>
      {/* <PriceTracker/> */}
    </div>
    </>
  )
}

export default App
