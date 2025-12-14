import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cocktails from './components/Cocktails' 

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Cocktails />
    </main>
  );
}
