import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Metrics from './components/Metrics';
import Carousel from './components/Carousel';
import Newsletter from './components/Newsletter';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Metrics />
      <Carousel />
      <Newsletter />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;