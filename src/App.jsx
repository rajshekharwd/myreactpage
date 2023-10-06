import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import Features from "./components/Features/Features";
import Layouts from "./components/LAYOUT/Layouts";
import Coponents from "./components/Coma/Coponents"
import Applications from "./components/Applications/Applications";
import Themes from "./components/Themes/Themes";
import Enjoying from "./components/Enjoying/Enjoying";
import Footer from "./components/footer/Footer"; 





function App() {
  return (
    <div>
      <Navigation/>
      <HeroSection/>
      <Features/>
      <Layouts/>
      <Coponents/>
      <Applications/>
      <Themes/>
      <Enjoying/>
      <Footer/>
 </div>
  );
}

export default App;