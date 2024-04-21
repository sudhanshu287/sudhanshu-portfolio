import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Qualification from './components/qualification/Qualification';


function App() {
  
  return (
    <div>
        <Header/>
        <Nav />
        <About />
        <Experience />
        <Qualification/>
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />

    </div>
  );
}

export default App;