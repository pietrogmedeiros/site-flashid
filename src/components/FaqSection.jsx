/* eslint-disable no-unused-vars */ // Desativa o aviso
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  { 
    id: 1, 
    question: 'O que é e como funciona o FLASH ID?', 
    answer: (
      <>
        <p>O FLASH ID é seu novo braço direito na cozinha para o controle de validades. É um sistema online super intuitivo:</p>
        <ul>
          <li><strong>Acesse:</strong> Faça login com seu e-mail e senha em qualquer dispositivo com internet (celular, tablet ou computador).</li>
          <li><strong>Controle:</strong> Tenha uma visão clara de tudo que está para vencer, o que vence hoje e o que já venceu. Adeus, planilhas e preocupações!</li>
          <li><strong>Imprima:</strong> Com poucos cliques, imprima etiquetas padronizadas e inteligentes para todos os seus produtos.</li>
        </ul>
        <p>Nosso objetivo é tornar a segurança alimentar da sua cozinha mais rápida, fácil e à prova de erros.</p>
      </>
    )
  },
  { 
    id: 2, 
    question: 'Como funcionam os planos e os equipamentos?', 
    answer: (
      <>
        <p>Oferecemos flexibilidade para se adaptar à sua realidade. Temos duas opções principais:</p>
        <ul>
          <li><strong>Plano Essencial:</strong> Ideal para quem já tem uma impressora. Você tem acesso completo ao nosso sistema de gestão de validades, impressão de etiquetas e nosso suporte total.</li>
          <li><strong>Plano Profissional:</strong> A solução completa! Além de todos os benefícios do sistema, você recebe em aluguel (comodato) uma impressora térmica pronta para usar e, se precisar, um tablet para facilitar ainda mais o trabalho na cozinha.</li>
        </ul>
        <p>Em resumo: você escolhe se quer apenas nosso sistema "cérebro" ou o pacote completo com os equipamentos.</p>
      </>
    )
  },
  { 
    id: 3, 
    question: 'E as etiquetas? Como são?', 
    answer: (
      <>
        <p>Nossas etiquetas foram pensadas para o ritmo de uma cozinha profissional. Elas são:</p>
        <ul>
          <li><strong>Material Premium (BOPP):</strong> Não rasgam fácil e aguentam o tranco de ambientes úmidos, frios ou quentes.</li>
          <li><strong>Cola Removível:</strong> Colam super bem, mas saem sem deixar aquela cola chata nos seus potes e vasilhas.</li>
          <li><strong>Informações Claras:</strong> Já vêm com todos os campos que a Vigilância Sanitária exige, preenchidos automaticamente pelo sistema. Adeus, caneta!</li>
          <li><strong>QR Code Inteligente:</strong> Cada etiqueta tem um QR Code único para dar baixa no produto de forma instantânea.</li>
        </ul>
      </>
    )
  },
  {
    id: 4,
    question: 'Como o FLASH ID me ajuda a evitar desperdício?',
    answer: (
      <>
        <p>Essa é a nossa mágica! O sistema calcula automaticamente as datas de validade primária e secundária dos seus produtos. No painel de controle, você vê de forma visual e colorida:</p>
        <ul>
          <li>O que está perto de vencer.</li>
          <li>O que precisa ser usado hoje.</li>
          <li>O que já passou da validade.</li>
        </ul>
        <p>Isso permite que sua equipe use os ingredientes de forma mais inteligente, reduzindo compras desnecessárias e o prejuízo com descartes.</p>
      </>
    )
  },
  {
    id: 5,
    question: 'Posso usar minha própria impressora ou tablet?',
    answer: (
      <>
        <p>Com certeza! O FLASH ID é um sistema flexível. Se você já tem uma impressora, pode contratar nosso Plano Essencial. Recomendamos o modelo ELGIN L42 PRO por ser 100% compatível.</p>
        <p>Para o acesso, qualquer tablet ou celular com um navegador de internet funciona perfeitamente.</p>
        <p>Lembrando que nosso suporte técnico para equipamentos cobre apenas os aparelhos alugados conosco, ok?</p>
      </>
    )
  },
  {
    id: 6,
    question: 'Para que serve o QR Code nas etiquetas?',
    answer: (
      <p>O QR Code é um atalho para economizar seu tempo. Quando um produto acabar, em vez de procurar por ele no sistema para dar baixa, basta fazer a leitura do QR Code com a câmera do seu celular ou tablet. O sistema remove o item do seu controle na mesma hora. Simples assim!</p>
    )
  },
  {
    id: 7,
    question: 'Preciso assinar um contrato de fidelidade?',
    answer: (
      <p><strong>De jeito nenhum!</strong> Na FLASH ID, não trabalhamos com contratos de permanência mínima. Acreditamos que a melhor forma de ter você como nosso parceiro é oferecendo uma solução que realmente facilita sua vida e traz resultados. Sua liberdade e satisfação vêm em primeiro lugar.</p>
    )
  }
];

const FaqItem = ({ item, onToggle, isActive }) => {
  const { question, answer } = item;
  return (
    <div className="faq-item" onClick={onToggle}>
      <motion.div className="faq-question">
        <span>{question}</span>
        <motion.div animate={{ rotate: isActive ? 180 : 0 }} className="faq-icon-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isActive && (
          <motion.section
            className="faq-answer"
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: '16px' }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <div className="faq-content">{answer}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const [activeId, setActiveId] = useState(null);
  const handleToggle = (id) => setActiveId(activeId === id ? null : id);
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>PERGUNTAS FREQUENTES</h2>
          <p>Olá! Bem-vindo ao espaço de dúvidas da FLASH ID. Viemos para simplificar sua vida na cozinha. Se sua pergunta não estiver aqui, é só nos chamar!</p>
        </div>
        <div className="faq-accordion">
          {faqData.map(item => <FaqItem key={item.id} item={item} onToggle={() => handleToggle(item.id)} isActive={activeId === item.id} />)}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;