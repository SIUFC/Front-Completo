import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AlterarSenha.css';

const EyeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

const EyeSlashIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
);


export default function AlterarSenha({ onNavigateBack }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    
    const [notification, setNotification] = useState({ message: '', type: '' });
    const notificationTimer = useRef(null);

    const showNotification = (message, type) => {
        clearTimeout(notificationTimer.current);
        setNotification({ message, type });
        notificationTimer.current = setTimeout(() => {
            setNotification({ message: '', type: '' });
        }, 4000);
    };

    useEffect(() => {
        return () => clearTimeout(notificationTimer.current);
    }, []);
    
    const handleConfirm = async () => {
        const newErrors = {};
        if (newPassword.length < 8) {
            newErrors.newPassword = 'A SENHA DEVE TER NO MÍNIMO 8 DÍGITOS';
        }
        if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = 'AS SENHAS NÃO COINCIDEM';
        }
        
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('authToken');

        if (!userId || !token) {
            showNotification('Erro de autenticação. Faça login novamente.', 'error');
            return;
        }

        const url = `http://localhost:5037/api/User/${userId}/password`;
        const payload = { NewPassword: newPassword };

        try {
            await axios.put(url, payload, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            showNotification('Senha alterada com sucesso!', 'success');
            
            setTimeout(() => {
                if (onNavigateBack) onNavigateBack();
            }, 2000);

        } catch (err) {
            console.error('Erro ao alterar senha:', err);
            showNotification('Não foi possível alterar a senha.', 'error');
        }
    };

    const handleBack = () => {
        if (onNavigateBack) onNavigateBack();
    };

    return (
        <div className="body-alterar-senha">
            {notification.message && (
                <div className={`notification ${notification.type}`}>
                    {notification.message}
                </div>
            )}

            <div className="header-superior-as">
                <div className="voltar-as" onClick={handleBack}>&lt;&lt; Voltar</div>
                <div className="config-as">
                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69.98l2.49 1c.23.09.49 0 .61.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>
                </div>
            </div>
            <div className="titulo-container-as">
                <div className="titulo-as">ALTERAR SENHA</div>
            </div>

            <div className="container-as">
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
                           {showNewPassword ? <EyeSlashIcon /> : <EyeIcon />}
                        </span>
                    </div>
                    {errors.newPassword && <p className="mensagem-erro">{errors.newPassword}</p>}
                </div>

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
                           {showConfirmPassword ? <EyeSlashIcon /> : <EyeIcon />}
                        </span>
                    </div>
                    {errors.confirmPassword && <p className="mensagem-erro">{errors.confirmPassword}</p>}
                </div>

                <button className="botao-confirmar-as" onClick={handleConfirm}>
                    Confirmar
                </button>
            </div>
        </div>
    );
}