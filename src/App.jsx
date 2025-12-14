import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cocktails from './components/Cocktails' 
import About from './components/About'
import Art from './components/Art'

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
}
