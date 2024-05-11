import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
    <div className='bg-img-home bg-cover bg-center from-black'>
      <Navbar/>
      <Welcome/>
    </div>
    </>
  )
}

export default App
