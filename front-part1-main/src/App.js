import React, { useState } from 'react';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Nivel from './pages/Nivel/Nivel';
import Ano from './pages/Nivel/Junior/Ano';
import Fase from './pages/Nivel/Junior/2021/Fase';
import Questao1 from './pages/Nivel/Junior/2021/Questões/Questao1';
import Perfil from './pages/Perfil/Perfil';
import AlterarNome from './pages/Perfil/AlterarNome/AlterarNome';
import AlterarSenha from './pages/Perfil/AlterarSenha/AlterarSenha';
import Relatorio from './pages/Perfil/Relatorio/Relatorio';


function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const navigateToCadastro = () => setCurrentScreen('cadastro');
  const navigateToLogin = () => setCurrentScreen('login');
  const navigateToNivel = () => setCurrentScreen('nivel');
  const navigateToAno = () => setCurrentScreen('ano');
  const navigateToFase = () => setCurrentScreen('fase');
  const navigateToQuestao1 = () => setCurrentScreen('questao1');
  const navigateToPerfil = () => setCurrentScreen('perfil');
  const navigateToAlterarNome = () => setCurrentScreen('alterarNome');
  const navigateToAlterarSenha = () => setCurrentScreen('alterarSenha');
  const navigateToRelatorio = () => setCurrentScreen('relatorio');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'cadastro':
        return <Cadastro onNavigateToLogin={navigateToLogin} />;

      case 'nivel':
        return (
          <Nivel
            onNavigateToLogin={navigateToLogin}
            onNavigateToAno={navigateToAno}
            onNavigateToPerfil={navigateToPerfil}
          />
        );

      case 'ano':
        return (
          <Ano
            onNavigateBack={() => setCurrentScreen('nivel')}
            onNavigateToFase={navigateToFase}
            onNavigateToPerfil={navigateToPerfil}
          />
        );

      case 'fase':
        return (
          <Fase
            onNavigateBack={() => setCurrentScreen('ano')}
            onNavigateToPerfil={navigateToPerfil}
            onNavigateToQuestao={navigateToQuestao1}
          />
        );

      case 'perfil':
        return (
          <Perfil
            onNavigateToAlterarNome={navigateToAlterarNome}
            onNavigateToAlterarSenha={navigateToAlterarSenha}
            onNavigateToRelatorio={navigateToRelatorio}
            onNavigateBack={() => setCurrentScreen('fase')}
             onNavigateToLogin={navigateToLogin}
          />
        );

      case 'alterarNome':
        return (
          <AlterarNome
            onNavigateBack={navigateToPerfil}
          />
        );

      case 'alterarSenha':
        return (
          <AlterarSenha
            onNavigateBack={navigateToPerfil}
          />
        );

      case 'relatorio':
        return (
          <Relatorio
            onNavigateBack={navigateToPerfil}
          />
        );

      case 'questao1':
        return (
          <Questao1 
            onNavigateBack={() => setCurrentScreen('fase')}
            onNavigateToPerfil={navigateToPerfil}
          />
        );

      case 'login':
      default:
        return (
          <Login
            onNavigateToCadastro={navigateToCadastro}
            onNavigateToNivel={navigateToNivel}
          />
        );
    }
  };

  return <div className="App">{renderScreen()}</div>;
}

export default App;