/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import logoGif from '../assets/logo/logo-animado.gif';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => setScrolled(window.scrollY > 10);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="main-nav">
          <a href="#" className="logo"><img src={logoGif} alt="Logo Animado FlashID" className="logo-animated" /></a>
          <ul className="nav-links">
            <li><a href="#features">Vantagens</a></li>
            <li><a href="#pricing">Planos</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <div className="nav-actions"><a href="#pricing" className="cta-button primary small">Contrate Agora</a></div>
        </nav>
      </div>
    </header>
  );
};
export default Header;