import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import GamesPage from './components/pages/GamesPage';
import TrophyCalculatorPage from './components/pages/TrophyCalculatorPage';
import DashboardPage from './components/pages/DashboardPage';
import AdminPage from './components/pages/AdminPage';
import VendeurPage from './components/pages/VendeurPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParams, setPageParams] = useState({});

  const handleNavigate = (page, params = {}) => {
    setCurrentPage(page);
    setPageParams(params);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'games':
        return <GamesPage onNavigate={handleNavigate} />;
      case 'trophies':
        return (
          <TrophyCalculatorPage 
            gameId={pageParams.game} 
            onNavigate={handleNavigate} 
          />
        );
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} />;
      case 'admin':
        return (
          <ProtectedRoute requireAdmin={true}>
            <AdminPage onNavigate={handleNavigate} />
          </ProtectedRoute>
        );
      case 'vendeur':
        return (
          <ProtectedRoute requireVendeur={true}>
            <VendeurPage onNavigate={handleNavigate} />
          </ProtectedRoute>
        );
      case 'profile':
        return <DashboardPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <ProtectedRoute>
          <Header currentPage={currentPage} onNavigate={handleNavigate} />
          <main>
            {renderPage()}
          </main>
        </ProtectedRoute>
      </div>
    </AuthProvider>
  );
}

export default App;
