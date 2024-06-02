import CTA from "./components/CTA";
import FeatureBox from "./components/FeatureBox";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Shorten from "./components/Shorten";
import Stats from "./components/Stats";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Shorten />
      <Stats />
      <FeatureBox />
      <CTA />
    </>
  );
}

export default App;
