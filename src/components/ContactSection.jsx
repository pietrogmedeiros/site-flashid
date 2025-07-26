// src/components/ContactSection.jsx

import React from 'react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const ContactSection = () => {
  return (
    <ScrollAnimatedSection>
      <section id="contact" className="contact-section">
        <div className="container contact-container">

          {/* Coluna da Esquerda: Formulário */}
          <div className="contact-form-pane">
            <form action="#" method="post" className="contact-form">
              <input type="text" name="nome" placeholder="Nome Completo" required />
              <input type="tel" name="telefone" placeholder="Telefone com DDD" required />
              <input type="email" name="email" placeholder="Seu melhor e-mail" required />
              <button type="submit" className="cta-button primary large form-submit-btn-final">
                Falar com Flash ID
              </button>
            </form>
          </div>

          {/* Coluna da Direita: Texto */}
          <div className="contact-text-pane">
            <h2>Comece a Revolução na sua Cozinha</h2>
            <p>Deixe seus dados para receber uma demonstração personalizada e entender o impacto real do FlashID no seu negócio.</p>
          </div>

        </div>
      </section>
    </ScrollAnimatedSection>
  );
};

export default ContactSection;