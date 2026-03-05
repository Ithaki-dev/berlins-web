import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Menu />
      <Experience />
      <Gallery />
      <Reservations />
      <Footer />
    </div>
  );
}

export default App;
