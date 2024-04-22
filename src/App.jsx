import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Projects from "./components/portfolio/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Qualification from "./components/qualification/Qualification";

function App() {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Qualification />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
