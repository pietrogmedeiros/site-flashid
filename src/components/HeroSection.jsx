/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import avatarImage from '../assets/../assets/avatar-flash-id/1.png';

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };

const HeroSection = () => (
  <motion.section id="hero" className="hero-section new-hero-layout" variants={containerVariants} initial="hidden" animate="visible">
    <div className="container hero-content">
      <motion.div className="hero-avatar-pane" variants={itemVariants}><img src={avatarImage} alt="Avatar da Flash ID" className="hero-image" /></motion.div>
      <motion.div className="hero-text-pane" variants={itemVariants}>
        <h1 className="hero-title">A gestão de etiquetas que seu restaurante precisa.</h1>
        <p className="hero-subtitle">FlashID é a plataforma moderna que automatiza a conformidade com a ANVISA, reduz desperdícios e agiliza sua cozinha com tecnologia.</p>
        <div className="hero-buttons"><a href="#pricing" className="cta-button primary large">Contrate Agora →</a><a href="#features" className="cta-button secondary large">Conhecer vantagens</a></div>
      </motion.div>
    </div>
  </motion.section>
);
export default HeroSection;