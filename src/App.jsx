import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden antialiased">
      {/* Background personalizado com gradiente em marrom claro */}
      <div className="absolute inset-0 h-full w-full bg-[#3c2b24]">
        <div className="absolute inset-0 bg-[#201914] bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
      </div>

      {/* Conteúdo do app */}
      <div className="relative z-10 container mx-auto">
      <Navbar/>


        <div className="">
        <HeroSection />
        </div>
        <div className="-">
        <About />
        </div>
        <Technologies/>
        <Projects/>
        <Contact/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
