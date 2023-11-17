import './App.css';
import AboutUs from './components/home/aboutUs/AboutUs';
import Footer from './components/home/footer/Footer';
import Home from './components/home/home/Home';
import Navbar from './components/home/navbar/Navbar';
import Pricing from './components/home/pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Home />
      <Pricing />
      {/* <AboutUs /> */}
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
