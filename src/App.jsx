import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cocktails from './components/Cocktails' 
import About from './components/About'

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Cocktails />
      <About />
    </main>
  );
}
