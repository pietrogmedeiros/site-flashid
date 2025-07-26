// src/components/PricingSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
// Adicionada a extensão .jsx para garantir a resolução
import ScrollAnimatedSection from './ScrollAnimatedSection.jsx';

const PricingCard = ({ plan, popular }) => {
  return (
    <motion.div 
      className={`pricing-card ${popular ? 'popular' : ''}`}
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {popular && <span className="popular-badge">Mais Popular</span>}
      <h3>{plan.name}</h3>
      {plan.subtitle && <p className="plan-subtitle">{plan.subtitle}</p>}
      <p className="price">R$ {plan.price}<span>,00/mês</span></p>
      
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>
            <span className="check-icon">✓</span>
            <span dangerouslySetInnerHTML={{ __html: feature }} />
          </li>
        ))}
      </ul>

      <a href="#contact" className={`cta-button full-width ${popular ? 'primary' : 'secondary'}`}>
        Contrate Agora
      </a>
    </motion.div>
  );
};

const plans = [
  {
    name: 'Essencial',
    price: '350',
    features: ['Software de gestão completo','Cadastro de produtos ilimitado','Geração de etiquetas de validade','Acesso para 1 usuário','Suporte via e-mail']
  },
  {
    name: 'Profissional',
    subtitle: '(Software + Impressora e Etiquetas)',
    price: '850',
    popular: true,
    features: ['Todos os recursos do Essencial','<strong>Impressora Térmica Profissional</strong>','<strong>Suprimento de etiquetas incluso</strong>','Múltiplos usuários e permissões','Suporte prioritário via WhatsApp']
  }
];

const PricingSection = () => {
  return (
    <ScrollAnimatedSection>
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Planos que cabem no seu negócio</h2>
            <p>Comece a otimizar sua cozinha hoje mesmo. Sem burocracia.</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} popular={plan.popular} />
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimatedSection>
  );
};

export default PricingSection;