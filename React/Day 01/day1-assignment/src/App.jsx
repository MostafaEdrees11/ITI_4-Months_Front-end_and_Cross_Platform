import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import MySkills from "./components/SkillsSection/Skills";
import MyServices from "./components/MyServices/MyServices";
import Footer from "./components/Footer/Footer";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroSection />
      <MySkills />
      <MyServices />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
