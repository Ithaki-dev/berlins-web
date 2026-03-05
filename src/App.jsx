import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Festivals from './components/Festivals';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-500">
      <Navbar />
      <Hero />
      <Menu />
      <Experience />
      <Festivals />
      <Gallery />
      <Reservations />
      <Footer />
    </div>
  );
}

export default App;
