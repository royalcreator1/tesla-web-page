import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Models from '../components/Models';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Models />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

