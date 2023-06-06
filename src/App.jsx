import Navbar from './components/Navbar.jsx';
import HeroBanner from './components/HeroBanner';
import About from './components/About';
import Team from './components/Team';
import Service from "./components/Service";
import Cursos from "./components/Cursos";
import Work from "./components/Work"
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main>
        <HeroBanner />
        <About />
        <Team />
        <Service />
        <Cursos />
        <Work />
        <Testimonial />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
