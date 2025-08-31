import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier si un utilisateur est déjà connecté au chargement
    const savedUser = localStorage.getItem('heroboost_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Simulation d'une API de connexion
      // Dans un vrai projet, vous feriez un appel API ici
      
      // Utilisateurs de test
      const testUsers = [
        {
          id: 1,
          email: 'admin@heroboost.com',
          password: 'admin123',
          role: 'admin',
          name: 'Administrateur'
        },
        {
          id: 2,
          email: 'client@heroboost.com',
          password: 'client123',
          role: 'client',
          name: 'Client Test'
        },
        {
          id: 3,
          email: 'vendeur@heroboost.com',
          password: 'vendeur123',
          role: 'vendeur',
          name: 'Vendeur Test'
        }
      ];

      const foundUser = testUsers.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        const userWithoutPassword = { ...foundUser };
        delete userWithoutPassword.password;
        
        setUser(userWithoutPassword);
        localStorage.setItem('heroboost_user', JSON.stringify(userWithoutPassword));
        return { success: true, user: userWithoutPassword };
      } else {
        return { success: false, error: 'Email ou mot de passe incorrect' };
      }
    } catch (error) {
      return { success: false, error: 'Erreur de connexion' };
    }
  };

  const register = async (userData) => {
    try {
      // Simulation d'une API d'inscription
      // Dans un vrai projet, vous feriez un appel API ici
      
      const newUser = {
        id: Date.now(),
        email: userData.email,
        name: userData.name,
        role: 'client' // Par défaut, les nouveaux utilisateurs sont des clients
      };

      setUser(newUser);
      localStorage.setItem('heroboost_user', JSON.stringify(newUser));
      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: 'Erreur lors de l\'inscription' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('heroboost_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isVendeur: user?.role === 'vendeur',
    isClient: user?.role === 'client'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

