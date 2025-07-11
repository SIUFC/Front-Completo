// pages/Relatorio.jsx

import React from 'react';
import './Relatorio.css'; 

export default function Relatorio({ onNavigateBack }) {
    // Dados do relatório (simulando dados vindos de uma API)
    const dadosRelatorio = [
        { label: 'Total de questões', value: 0 },
        { label: 'Total de acertos', value: 0 },
        { label: 'Total de erros', value: 0 },
        { label: 'Questões feitas (Nível 2)', value: 0 },
        { label: 'Questões feitas (Nível 1)', value: 0 },
        { label: 'Questões feitas (Nível Jr)', value: 0 },
    ];

    const handleVoltar = () => {
        if (onNavigateBack) onNavigateBack();
    };

    return (
        <div className="body-relatorio">
            {/* Header */}
            <div className="header-superior-r">
                <div className="voltar-r" onClick={handleVoltar}>&lt;&lt; Voltar</div>
                <div className="config-r">
                    <svg viewBox="0 0 24 24">
                        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17-.59-1.69-.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19-.15-.24.42-.12-.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                    </svg>
                </div>
            </div>

            {/* Título */}
            <div className="titulo-container-r">
                <div className="titulo-r">RELATÓRIO</div>
            </div>

            {/* Conteúdo Principal */}
            <div className="container-r">
                {dadosRelatorio.map((item, index) => (
                    <div className="relatorio-item" key={index}>
                        <span className="relatorio-label">{item.label}</span>
                        <span className="relatorio-value">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}