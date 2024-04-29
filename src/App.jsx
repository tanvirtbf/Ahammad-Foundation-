import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Programs from "./components/programs/Programs";
import Testimonials from "./components/testimonials/Testimonials";
import Title from "./components/title/Title";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer' />
        <Programs />
        <About />
        <Title subTitle='Ahammad Foundation' title='Our Gallery' />
        <Campus />
        <Title subTitle='Testimonials' title='What Student Says' />
        <Testimonials />
        <Title subTitle='CONTACT US' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
