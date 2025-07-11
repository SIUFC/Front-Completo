// pages/AlterarNome.jsx

import React, { useState } from 'react';
import './AlterarNome.css';

export default function AlterarNome({ onNavigateBack }) {
    const [newName, setNewName] = useState('');
    const [error, setError] = useState('');

    const handleConfirm = () => {
        if (!newName.trim()) {
            setError('PREENCHA O CAMPO DE NOME');
            return;
        }
        setError('');
        console.log(`Nome alterado para: ${newName}`);
        alert("Nome alterado com sucesso! (Simulação)");
        if (onNavigateBack) onNavigateBack();
    };

    const handleBack = () => {
        if (onNavigateBack) onNavigateBack();
    };

    return (
        <div className="body-alterar-nome">
            
            <div className="header-superior-an">
                <div className="voltar-an" onClick={handleBack}>&lt;&lt; Voltar</div>
                <div className="config-an">
                    <svg viewBox="0 0 24 24"><path d="M19.43..."></path></svg>
                </div>
            </div>
            <div className="titulo-container-an">
                <div className="titulo-an">ALTERAR NOME</div>
            </div>

            <div className="container-an">
                <div className="form-grupo">
                    <label htmlFor="full-name" className="label-nome">Nome</label>
                    <input
                        type="text"
                        id="full-name"
                        className="input-nome"
                        placeholder="Nome completo"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    
                    {error && <p className="mensagem-erro">{error}</p>}
                </div>

                <button className="botao-confirmar" onClick={handleConfirm}>
                    Confirmar
                </button>
            </div>
        </div>
    );
}