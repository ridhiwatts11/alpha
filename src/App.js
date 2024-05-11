import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Feat from "./Components/Feat";
import TextMiddle from './Components/TextMiddle';
import Window from './Components/Window';
import SocialProofSec from './Components/SocialProofSec';
import Cont from './Components/Cont';
import Testimonials from './Components/Testimonials';
import Features from './Components/Features';
import FAQSection from './Components/FAQSection';
import Blog from './Components/Blog';
import FreeTrial from './Components/FreeTrial';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
        <Navbar/>
        {/* <Feat/> */}
        <TextMiddle/>
        <Window/>
        <SocialProofSec/>
        <Cont/>
        <Testimonials/>
        <Features/>
        <FAQSection/>
        <Blog/>
        <FreeTrial/>
        <Footer/>
    </div>
  );
}

export default App;
