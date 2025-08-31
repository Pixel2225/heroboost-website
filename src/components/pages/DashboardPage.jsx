import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  Trophy, 
  Star, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Plus,
  TrendingUp,
  Calendar,
  Euro
} from 'lucide-react';

const DashboardPage = ({ onNavigate }) => {
  const { user } = useAuth();
  
  // Données simulées pour les commandes
  const [orders] = useState([
    {
      id: 1,
      game: 'Clash Royale',
      gameId: 'clash-royale',
      currentTrophies: 3500,
      targetTrophies: 5000,
      price: 45.50,
      status: 'in-progress',
      progress: 65,
      createdAt: '2025-08-30',
      estimatedCompletion: '2025-08-31'
    },
    {
      id: 2,
      game: 'Brawl Stars',
      gameId: 'brawl-stars',
      currentTrophies: 15000,
      targetTrophies: 20000,
      price: 89.90,
      status: 'completed',
      progress: 100,
      createdAt: '2025-08-28',
      completedAt: '2025-08-29'
    },
    {
      id: 3,
      game: 'Clash Royale',
      gameId: 'clash-royale',
      currentTrophies: 2000,
      targetTrophies: 3000,
      price: 25.30,
      status: 'pending',
      progress: 0,
      createdAt: '2025-08-31',
      estimatedStart: '2025-09-01'
    }
  ]);

  const getStatusInfo = (status) => {
    const statusMap = {
      'pending': {
        label: 'En attente',
        color: 'bg-yellow-100 text-yellow-800',
        icon: Clock
      },
      'in-progress': {
        label: 'En cours',
        color: 'bg-blue-100 text-blue-800',
        icon: TrendingUp
      },
      'completed': {
        label: 'Terminé',
        color: 'bg-green-100 text-green-800',
        icon: CheckCircle
      },
      'cancelled': {
        label: 'Annulé',
        color: 'bg-red-100 text-red-800',
        icon: AlertCircle
      }
    };
    return statusMap[status] || statusMap.pending;
  };

  const getGameIcon = (gameId) => {
    return gameId === 'clash-royale' ? Trophy : Star;
  };

  const totalSpent = orders.reduce((sum, order) => sum + order.price, 0);
  const completedOrders = orders.filter(order => order.status === 'completed').length;
  const activeOrders = orders.filter(order => order.status === 'in-progress').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Tableau de bord
              </h1>
              <p className="text-gray-600">
                Bienvenue, {user?.name}
              </p>
            </div>
            <Button 
              onClick={() => onNavigate('games')}
              className="bg-green-600 hover:bg-green-700"
            >
              <Plus className="mr-2 h-4 w-4" />
              Nouveau boost
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="dashboard-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total dépensé</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalSpent.toFixed(2)}€
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Euro className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Commandes terminées</p>
                  <p className="text-2xl font-bold text-gray-900">{completedOrders}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Boosts actifs</p>
                  <p className="text-2xl font-bold text-gray-900">{activeOrders}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total commandes</p>
                  <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des commandes */}
        <Card>
          <CardHeader>
            <CardTitle>Mes commandes</CardTitle>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Aucune commande
                </h3>
                <p className="text-gray-600 mb-4">
                  Vous n'avez pas encore passé de commande de boost.
                </p>
                <Button onClick={() => onNavigate('games')}>
                  Commander votre premier boost
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => {
                  const statusInfo = getStatusInfo(order.status);
                  const GameIcon = getGameIcon(order.gameId);
                  
                  return (
                    <div key={order.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <GameIcon className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {order.game} - Boost #{order.id}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {order.currentTrophies.toLocaleString()} → {order.targetTrophies.toLocaleString()} trophées
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={statusInfo.color}>
                            <statusInfo.icon className="mr-1 h-3 w-3" />
                            {statusInfo.label}
                          </Badge>
                          <p className="text-lg font-bold text-gray-900 mt-1">
                            {order.price.toFixed(2)}€
                          </p>
                        </div>
                      </div>

                      {order.status === 'in-progress' && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Progression</span>
                            <span>{order.progress}%</span>
                          </div>
                          <Progress value={order.progress} className="h-2" />
                        </div>
                      )}

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Commandé le {new Date(order.createdAt).toLocaleDateString('fr-FR')}</span>
                          </div>
                          {order.status === 'completed' && order.completedAt && (
                            <div className="flex items-center">
                              <CheckCircle className="mr-1 h-4 w-4 text-green-600" />
                              <span>Terminé le {new Date(order.completedAt).toLocaleDateString('fr-FR')}</span>
                            </div>
                          )}
                          {order.status === 'in-progress' && order.estimatedCompletion && (
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4 text-blue-600" />
                              <span>Fin estimée: {new Date(order.estimatedCompletion).toLocaleDateString('fr-FR')}</span>
                            </div>
                          )}
                        </div>
                        {order.status === 'pending' && (
                          <Button variant="outline" size="sm">
                            Voir détails
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;

