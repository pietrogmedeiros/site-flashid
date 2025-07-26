// src/components/ROICalculator.jsx
import React, { useState, useMemo } from 'react';
import './ROICalculator.css'; // Não se esqueça de criar e manter este arquivo CSS!

const ROICalculator = () => {
  // 1. Estados para as entradas do usuário (controle dos inputs do formulário)
  const [numFuncionarios, setNumFuncionarios] = useState('');
  const [tempoMedioGastoPorDia, setTempoMedioGastoPorDia] = useState(''); // em horas
  const [perdaMensalProdutosVencidos, setPerdaMensalProdutosVencidos] = useState('');
  const [custoMedioHoraFuncionario, setCustoMedioHoraFuncionario] = useState(''); // Estado para o novo input

  // Constante para os dias úteis no mês (pode ser ajustado se necessário)
  const DIAS_UTEIS_NO_MES = 22;

  // 2. Função genérica para lidar com a mudança de inputs numéricos
  // Esta função foi a causa do erro 'handleChange is not defined' anteriormente.
  // Ela precisa estar definida dentro do COMPONENTE ROICalculator, como está agora.
  const handleChange = (setter) => (e) => {
    // Permite apenas números e um ponto decimal (para valores como "0.5" ou "25.50")
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  // 3. Lógica de cálculo da economia (horas e Reais)
  // Usamos useMemo para otimizar: o cálculo só será refeito se as dependências (inputs) mudarem.
  const { horasEconomizadas, reaisEconomizados } = useMemo(() => {
    // Converte os valores dos estados para números, tratando inputs vazios como 0
    const n = parseFloat(numFuncionarios) || 0;
    const t = parseFloat(tempoMedioGastoPorDia) || 0;
    const p = parseFloat(perdaMensalProdutosVencidos) || 0;
    const c = parseFloat(custoMedioHoraFuncionario) || 0;

    // Cálculo das horas economizadas
    const horas = n * t * DIAS_UTEIS_NO_MES;

    // Cálculo da economia de mão de obra (horas * custo por hora)
    const economiaPorTempo = horas * c;

    // Cálculo da economia total (mão de obra + perdas com vencidos)
    const economiaTotal = economiaPorTempo + p;

    return {
      horasEconomizadas: horas,
      reaisEconomizados: economiaTotal,
    };
  }, [numFuncionarios, tempoMedioGastoPorDia, perdaMensalProdutosVencidos, custoMedioHoraFuncionario]);
  // As dependências listadas aqui garantem que o useMemo "assista" a essas variáveis
  // e recalcule quando qualquer uma delas mudar.

  // 4. Lógica para exibir os resultados (se pelo menos um input tiver valor)
  // Isso evita mostrar "0 horas e R$ 0,00" antes do usuário digitar algo.
  const showResults = numFuncionarios || tempoMedioGastoPorDia || perdaMensalProdutosVencidos || custoMedioHoraFuncionario;

  // 5. Renderização do componente (o JSX)
  return (
    <section className="roi-calculator-section"> {/* Seção principal com fundo laranja */}
      <div className="container"> {/* Container para limitar e centralizar conteúdo */}
        <h2>Descubra seu ROI com Flash ID</h2>
        <p>
          Entenda o potencial de economia que o Flash ID pode trazer para sua operação.
          Preencha os campos abaixo para uma estimativa personalizada.
        </p>

        {/* Wrapper flexível para o layout de duas colunas (formulário e resultados) */}
        <div className="calculator-layout-wrapper">
          {/* Formulário da calculadora (coluna da esquerda) */}
          <div className="calculator-form">
            <div className="form-group">
              <label htmlFor="numFuncionarios">Número de funcionários que realizam a etiquetagem:</label>
              <input
                type="number"
                id="numFuncionarios"
                value={numFuncionarios}
                onChange={handleChange(setNumFuncionarios)} /* Usa a função handleChange */
                min="0"
                placeholder="Ex.: 5"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tempoMedioGastoPorDia">Tempo médio diário gasto por funcionário com etiquetagem (horas):</label>
              <input
                type="number"
                id="tempoMedioGastoPorDia"
                value={tempoMedioGastoPorDia}
                onChange={handleChange(setTempoMedioGastoPorDia)} /* Usa a função handleChange */
                step="0.5" /* Permite valores como 0.5, 1.5, etc. */
                min="0"
                placeholder="Ex.: 1.5 (uma hora e meia)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="perdaMensalProdutosVencidos">Estimativa de perda mensal com produtos vencidos (R$):</label>
              <input
                type="number"
                id="perdaMensalProdutosVencidos"
                value={perdaMensalProdutosVencidos}
                onChange={handleChange(setPerdaMensalProdutosVencidos)} /* Usa a função handleChange */
                min="0"
                step="0.01" /* Permite valores com casas decimais para dinheiro */
                placeholder="Ex.: 1500.00"
              />
            </div>

            <div className="form-group">
              <label htmlFor="custoMedioHoraFuncionario">Custo médio por hora de um funcionário (R$):</label>
              <input
                type="number"
                id="custoMedioHoraFuncionario"
                value={custoMedioHoraFuncionario}
                onChange={handleChange(setCustoMedioHoraFuncionario)} /* Usa a função handleChange */
                min="0"
                step="0.01"
                placeholder="Ex.: 25.50"
              />
            </div>
          </div>

          {/* Seção de resultados (coluna da direita), só aparece se showResults for true */}
          {showResults && (
            <div className="results">
              <h3>Com o Flash ID, você poderia economizar:</h3>
              <p className="saved-hours">
                Ao todo, cerca de <strong>{horasEconomizadas.toFixed(1)}</strong> horas por mês!
              </p>
              <p className="saved-money">
                E aproximadamente <strong>R$ {reaisEconomizados.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> por mês!
              </p>
              <p className="impact-statement">Isso torna o valor do Flash ID inquestionável para o seu negócio.</p>
            </div>
          )}
        </div> {/* Fim do .calculator-layout-wrapper */}
      </div> {/* Fim do .container */}
    </section>
  );
};

export default ROICalculator;