import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import logo from '../../assets/logo.png';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen hero-gradient hero-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src={logo} 
            alt="HeroBoost" 
            className="h-20 w-auto mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-white mb-2">
            Bienvenue sur HeroBoost
          </h1>
          <p className="text-white/80">
            Boostez vos comptes et vos performances sur vos jeux préférés
          </p>
        </div>

        {/* Formulaire d'authentification */}
        {isLogin ? (
          <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;

