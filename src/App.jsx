import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

const App = () => {
  return (
    <div className="bg-[#3b2314]">
      
      <Navbar/>

        <HeroSection />
        <About />
        <Technologies/>
        <Projects/>
        <Contact/>
        <Footer />
    </div>
  );
};

export default App;
