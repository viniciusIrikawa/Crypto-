import './App.css';
import CryptoListings from './components/CryptoListings';
import Navbar from './components/Navbar';
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
    </div>
    </>
  )
}

export default App
