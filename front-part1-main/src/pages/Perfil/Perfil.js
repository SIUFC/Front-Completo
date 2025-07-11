// pages/Profile.jsx

import React, { useState, useEffect } from 'react';
import './Perfil.css';

export default function Perfil({ onNavigateToAlterarNome, onNavigateToAlterarSenha, onNavigateToRelatorio, onNavigateBack }) {

    const [user, setUser] = useState({
        name: 'User Name',
        email: 'username@gmail.com'
    });

    useEffect(() => {
        const data = {
            name: 'User Name',
            email: 'username@gmail.com'
        };
        setUser(data);
    }, []);

    // Funções de navegação usando props
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
            
            {/* Main content */}
            <div className="container">
                <div className="nome">{user.name}</div>
                <div className="email">{user.email}</div>

                <div className="botoes">
                    <button onClick={goToChangeName}>Alterar nome</button>
                    <button onClick={goToChangePassword}>Alterar senha</button>
                    <button onClick={goToReport}>Relatório</button>
                    <button>Sair</button>
                </div>
            </div>
        </div>
    );
}
