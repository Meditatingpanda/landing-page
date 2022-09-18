import Footer from "../components/Footer";
import Home from "../components/Home";
import Reviews from "../components/Reviews";
import UseCases from "../components/UseCases";

function Hero() {
  return (
    <div>
      <Home />
      <UseCases/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default Hero;