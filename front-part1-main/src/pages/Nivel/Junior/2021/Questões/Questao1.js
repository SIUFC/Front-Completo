import React, { useState } from 'react';
import { FaArrowLeft, FaCog } from 'react-icons/fa';
import './Questao.css'; 
import text from './1-3.jpg';

const Questao1 = ({ onNavigateBack, onNavigateToPerfil }) => {
  const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);

  const alternativas = [
    { id: 'A', texto: 'Bia, Duda, Alice, Iza, Clara, Lia, Elza' },
    { id: 'B', texto: 'Bia, Duda, Alice, Lia, Clara, Elza, Iza' },
    { id: 'C', texto: 'Duda, Alice, Bia, Iza, Lia, Clara, Elza' },
    { id: 'D', texto: 'Duda, Alice, Iza, Lia, Bia, Clara, Elza' },
    { id: 'E', texto: 'Alice, Duda, Bia, Iza, Lia, Clara, Elza' },
  ];

  const handleSelect = (event) => {
    setAlternativaSelecionada(event.target.value);
  };

  const handleAvancar = () => {
    if (alternativaSelecionada) {
      alert(`Resposta selecionada: ${alternativaSelecionada}`);
    } else {
      alert('Selecione uma alternativa');
    }
  };

  return (
    <div className="nivel-container">
      <header className="nivel-header">
        <button onClick={onNavigateBack} className="nav-button">
          <FaArrowLeft /> Voltar
        </button>
        <button onClick={onNavigateToPerfil} className="nav-button">
          <FaCog />
        </button>
      </header>

      <img 
        src={text}
        alt="texto da questão"
        className="imagem-texto-questao"
      />
      
      <main className="nivel-main">
        <div className="area-pergunta">
          <h2 className="texto-pergunta">
            Qual das seguintes alternativas poderia ser uma lista ordenada das amigas, da mais jovem para a mais velha?
          </h2>
          <div className="form-alternativas">
            {alternativas.map((alt) => (
              <label key={alt.id} htmlFor={`alt-${alt.id}`} className="alternativa-item">
                <input
                  type="radio"
                  id={`alt-${alt.id}`}
                  name="alternativa"
                  value={alt.id}
                  checked={alternativaSelecionada === alt.id}
                  onChange={handleSelect}
                />
                <span>
                  <strong>{alt.id})</strong> {alt.texto}
                </span>
              </label>
            ))}
          </div>
        </div>
      </main>

      <footer className="rodape-questao">
        {/* O botão "Avançar" reutiliza o estilo .nivel-button */}
        <button className="nivel-button" onClick={handleAvancar}>
          Avançar
        </button>
      </footer>
    </div>
  );
};

export default Questao1;