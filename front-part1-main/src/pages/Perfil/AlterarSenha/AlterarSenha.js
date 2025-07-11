// pages/AlterarSenha.jsx

import React, { useState } from 'react';
import './AlterarSenha.css';

const EyeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

export default function AlterarSenha({ onNavigateBack }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleConfirm = () => {
        const newErrors = {};
        if (newPassword.length < 8) {
            newErrors.newPassword = 'A SENHA DEVE TER NO MÍNIMO 8 DÍGITOS';
        }
        if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = 'AS SENHAS NÃO COINCIDEM';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log("Nova senha (simulado):", newPassword);
            alert("Senha alterada com sucesso! (Simulação)");
            if (onNavigateBack) onNavigateBack();
        }
    };

    const handleBack = () => {
        if (onNavigateBack) onNavigateBack();
    };

    return (
        <div className="body-alterar-senha">
            <div className="header-superior-as">
                <div className="voltar-as" onClick={handleBack}>&lt;&lt; Voltar</div>
                <div className="config-as">
                    <svg viewBox="0 0 24 24"><path d="M19.43..."></path></svg>
                </div>
            </div>
            <div className="titulo-container-as">
                <div className="titulo-as">ALTERAR SENHA</div>
            </div>

            <div className="container-as">
                {/* Campo Nova Senha */}
                <div className="form-grupo-as">
                    <label className="label-senha">Nova senha</label>
                    <div className="input-container">
                        <input
                            type={showNewPassword ? 'text' : 'password'}
                            className="input-senha"
                            placeholder="Nova senha"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <span className="eye-icon" onClick={() => setShowNewPassword(!showNewPassword)}>
                            <EyeIcon />
                        </span>
                    </div>
                    {/*Exibe a mensagem de erro para o campo 'newPassword' */}
                    {errors.newPassword && <p className="mensagem-erro">{errors.newPassword}</p>}
                </div>

                {/* Campo Confirmar Senha */}
                <div className="form-grupo-as">
                    <label className="label-senha">Confirmar senha</label>
                    <div className="input-container">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            className="input-senha"
                            placeholder="Confirmar senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <EyeIcon />
                        </span>
                    </div>
                    {/* Exibe a mensagem de erro para o campo 'confirmPassword' */}
                    {errors.confirmPassword && <p className="mensagem-erro">{errors.confirmPassword}</p>}
                </div>

                <button className="botao-confirmar-as" onClick={handleConfirm}>
                    Confirmar
                </button>
            </div>
        </div>
    );
}