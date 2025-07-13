// pages/Profile.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Perfil.css';

export default function Perfil({ onNavigateToAlterarNome, onNavigateToAlterarSenha, onNavigateToRelatorio, onNavigateBack,onNavigateToLogin  }) {

    const [user, setUser] = useState({
        name: '',
        email: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            setError('');
            try {
                const userId = localStorage.getItem('userId');
                const token = localStorage.getItem('authToken');
                console.log('userId:', userId);
                console.log('token:', token);
                const response = await axios.get(
                    `http://localhost:5000/api/User/${userId}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );
                setUser({
                    name: response.data.name,
                    email: response.data.email
                });
            } catch (err) {
                console.error(err); // Veja o erro completo no console
                setError('Erro ao buscar usuário');
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

       const handleLogout = () => {
        // Limpa os dados do usuário do navegador
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');

        // Chama a função que te leva direto para a tela de login
        if (onNavigateToLogin) {
            onNavigateToLogin();
        }
    };

    const goToChangeName = () => onNavigateToAlterarNome && onNavigateToAlterarNome();
    const goToChangePassword = () => onNavigateToAlterarSenha && onNavigateToAlterarSenha();
    const goToReport = () => onNavigateToRelatorio && onNavigateToRelatorio();
    const handleBack = () => onNavigateBack && onNavigateBack();

    return (
        <div className="body">
            <div className="header-superior">
                <div className="voltar" onClick={handleBack}>&lt;&lt; Voltar</div>

                <div className="config">
                    <svg viewBox="0 0 24 24">
                        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                    </svg>
                </div>
            </div>

            <div className="titulo-container">
                <div className="titulo">PERFIL</div>
            </div>
            
            <div className="container">
                {loading ? (
                    <div>Carregando...</div>
                ) : error ? (
                    <div className="mensagem-erro">{error}</div>
                ) : (
                    <>
                        <div className="nome">{user.name}</div>
                        <div className="email">{user.email}</div>
                        <div className="botoes">
                            <button onClick={goToChangeName}>Alterar nome</button>
                            <button onClick={goToChangePassword}>Alterar senha</button>
                            <button onClick={goToReport}>Relatório</button>
                            <button onClick={handleLogout}>Sair</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
