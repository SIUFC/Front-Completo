
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import './RelatorioQuestoes.css';

const RelatorioQuestoes = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const relatorio = location.state?.relatorio;

    
    const handleRecomecar = () => {
     
        navigate(-1); 
    };

    const handleMudarNivel = () => {
        navigate('/selecionar-nivel'); 
    };

    const handleSair = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        navigate('/login');
    };

    if (!relatorio) {
        return (
            <div className="body-relatorio-questoes status">
                <h2>Nenhum resultado para exibir.</h2>
                <button onClick={handleMudarNivel} className="botao-resultado">
                    Iniciar uma nova prova
                </button>
            </div>
        );
    }

    return (
        <div className="body-relatorio-questoes">
            <header className="resultado-header">
                <button className="back-button" onClick={handleMudarNivel}>
                    <FaArrowLeft /> Voltar
                </button>
            </header>
            
            <div className="title-bar">
                <h1 className="title-bar-text">RESULTADO</h1>
            </div>

            <main className="resultado-main">
                <div className="placar-container">
                    <span className="placar-acertos">{relatorio.acertos}</span>
                    <span className="placar-divisor">/</span>
                    <span className="placar-total">{relatorio.totalQuestoes}</span>
                </div>

                <div className="lista-respostas">
                    {relatorio.detalhes.map((item) => (
                         <div key={item.numero} className="item-resposta">
        <span className="resposta-usuario">{item.numero}) Sua resposta: {item.suaResposta}</span>
        <span className={`feedback-texto ${item.acertou ? 'feedback-correta' : 'feedback-errada'}`}>
    {item.acertou ? '(CORRETA)' : '(ERRADA)'}
</span>
    </div>
                    ))}
                </div>

                <div className="botoes-resultado">
                    <button onClick={handleRecomecar} className="botao-resultado">Recomeçar Prova</button>
                    <button onClick={handleMudarNivel} className="botao-resultado">Mudar de Nível</button>
                    <button onClick={handleSair} className="botao-resultado sair">Sair</button>
                </div>
            </main>
        </div>
    );
};

export default RelatorioQuestoes;