import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import './Cadastro.css';

const Cadastro = ({ onNavigateToLogin }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  return (
    <div className="cadastro-container">
      <header className="cadastro-header">
        <button onClick={onNavigateToLogin} className="back-button">
          <FaArrowLeft /> Voltar
        </button>
        <div className="title-bar">
          <h1>CADASTRE-SE</h1>
        </div>
      </header>

      <main className="cadastro-main">
        <form className="cadastro-form">
          <div className="input-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Nome completo" />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="E-mail" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <div className="password-wrapper">
              <input
                type={passwordShown ? 'text' : 'password'}
                id="password"
                placeholder="Senha"
              />
              <span onClick={() => setPasswordShown(!passwordShown)} className="password-toggle-icon">
                {passwordShown ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirmar senha</label>
            <div className="password-wrapper">
              <input
                type={confirmPasswordShown ? 'text' : 'password'}
                id="confirm-password"
                placeholder="Confirmar senha"
              />
              <span onClick={() => setConfirmPasswordShown(!confirmPasswordShown)} className="password-toggle-icon">
                {confirmPasswordShown ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="cadastro-button">
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Cadastro;