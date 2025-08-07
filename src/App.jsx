import gsap from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<main>
			<Navbar />
			<HeroSection />
      <div className="h-dvh"></div>
		</main>
	);
};

export default App;
