// src/App.jsx

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EcosystemSection from './components/EcosystemSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ScrollAnimatedSection from './components/ScrollAnimatedSection';

// --- ADICIONE ESTA LINHA ---
import ROICalculator from './components/ROICalculator'; 
// -- FIM DA ADIÇÃO ---

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EcosystemSection />
        
        {/* --- ADICIONE A CALCULADORA AQUI --- */}
        {/* Opcional: Se quiser que a calculadora também tenha animação ao rolar, envolva-a em <ScrollAnimatedSection> */}
        <ROICalculator /> 
        {/* ou, se preferir com animação: */}
        {/* <ScrollAnimatedSection> */}
        {/*   <ROICalculator /> */}
        {/* </ScrollAnimatedSection> */}
        {/* -- FIM DA ADIÇÃO --- */}
        
        <ScrollAnimatedSection>
          <PricingSection />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection>
          <ContactSection />
        </ScrollAnimatedSection>
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
export default App;