import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import './Cadastro.css';

const Cadastro = ({ onNavigateToLogin }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  
const handleSubmit = async (event) => {
    
    event.preventDefault(); 

    // validação dos campos
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    // objeto com os dados para a API
    const userData = {
      name: name,
      email: email,
      password: password,
      role: "2" // Role fixa - Usuario
    };

    
    try {
      // requisição POST com axios
      await axios.post('http://localhost:5037/api/User', userData);
      
      alert('Cadastro realizado com sucesso!');
      onNavigateToLogin(); // Volta para a tela de login

    } catch (error) {
      // Se der erro, exibe um alerta e loga no console
      console.error('Erro ao cadastrar:', error);
      alert('Ocorreu um erro ao realizar o cadastro.');
    }
};

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
        
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <div className="password-wrapper">
              <input
                type={passwordShown ? 'text' : 'password'}
                id="password"
                placeholder="Senha"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
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
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
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