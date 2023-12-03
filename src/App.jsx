import { About } from './layout/About';
import { ContactSection } from './layout/ContactSection';
import { FaqSection } from './layout/FaqSection';
import { Feature } from './layout/Feature';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Hero } from './layout/Hero';
import { SliderSection } from './layout/SliderSection';

function App() {
  return (
    <>
      <Header id="header" />
      <main className="main">
        <Hero />
        <About id="about" />
        <Feature />
        <SliderSection id="cases" />
        <FaqSection />
        <ContactSection id="contact-us" />
      </main>
      <Footer />
    </>
  );
}

export default App;
