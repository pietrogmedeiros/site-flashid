/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import icon1Url from '../assets/icons/icon1.svg';
import icon2Url from '../assets/icons/icon2.svg';
import icon3Url from '../assets/icons/icon3.svg';
import icon4Url from '../assets/icons/icon4.svg';

const features = [
  { id: 1, title: 'Conformidade Total', text: 'Gere etiquetas 100% adequadas à ANVISA com um clique.', icon: icon1Url },
  { id: 2, title: 'Agilidade Extrema', text: 'Sua equipe imprime qualquer etiqueta em segundos.', icon: icon2Url },
  { id: 3, title: 'Menos Desperdício', text: 'O painel visual mostra claramente o que está perto de vencer.', icon: icon3Url },
  { id: 4, title: 'Relatórios Inteligentes', text: 'Tome decisões estratégicas com base em dados reais.', icon: icon4Url }
];

const EcosystemSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const activeFeature = features[activeIndex];

  return (
    <section id="features" className="live-carousel-section">
      <div className="magma-background"><div className="magma-blob-1" /><div className="magma-blob-2" /><div className="magma-blob-3" /></div>
      <div className="container two-column-layout">
        <div className="section-header-left">
          <h2>Uma Plataforma Viva e Integrada</h2>
          <p>Nossas soluções trabalham em conjunto para otimizar sua operação, de ponta a ponta.</p>
        </div>
        <div className="live-carousel-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex} className="carousel-item"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}>
              <div className="card-icon-wrapper"><img src={activeFeature.icon} alt={activeFeature.title} className="feature-icon" /></div>
              <div className="card-text-content"><h3>{activeFeature.title}</h3><p>{activeFeature.text}</p></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default EcosystemSection;