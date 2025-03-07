import './App.css';
import Blogs from './components/Blogs/blogs';
import Experience from './components/Experience/Experience';
import Expertise from './components/Expertise/Expertise';
import HeroContent from './components/HeroContent/HeroContent';
import WorksSection from './components/Works/works';
import Navbar from './Navbar/Navbar';
import Testmonial from './components/Testmonial/Testmonial';
import FAQSection from './components/FaqSection/Faq';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroContent />
      <Expertise />
      <WorksSection />
      <Experience />
      <Blogs />
      <Testmonial />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
