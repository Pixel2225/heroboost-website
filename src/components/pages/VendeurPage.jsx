import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  TrendingUp, 
  Euro,
  Trophy,
  Star,
  CheckCircle,
  Clock,
  AlertCircle,
  Calendar,
  Target,
  Award
} from 'lucide-react';

const VendeurPage = () => {
  // Données simulées pour le vendeur
  const [stats] = useState({
    totalEarnings: 2345.60,
    completedOrders: 45,
    activeOrders: 3,
    averageRating: 4.8,
    thisMonthEarnings: 567.80,
    thisMonthOrders: 12
  });

  const [assignedOrders] = useState([
    {
      id: 1001,
      user: 'Jean Dupont',
      game: 'Clash Royale',
      gameId: 'clash-royale',
      currentTrophies: 3500,
      targetTrophies: 5000,
      price: 45.50,
      commission: 22.75, // 50% de commission
      status: 'in-progress',
      progress: 65,
      createdAt: '2025-08-30T10:30:00',
      estimatedCompletion: '2025-08-31T18:00:00',
      deadline: '2025-09-01T23:59:59'
    },
    {
      id: 1004,
      user: 'Sophie Leroy',
      game: 'Brawl Stars',
      gameId: 'brawl-stars',
      currentTrophies: 8000,
      targetTrophies: 12000,
      price: 67.20,
      commission: 33.60,
      status: 'assigned',
      progress: 0,
      createdAt: '2025-08-31T14:20:00',
      deadline: '2025-09-02T23:59:59'
    },
    {
      id: 1005,
      user: 'Lucas Martin',
      game: 'Clash Royale',
      gameId: 'clash-royale',
      currentTrophies: 4200,
      targetTrophies: 6000,
      price: 52.80,
      commission: 26.40,
      status: 'assigned',
      progress: 0,
      createdAt: '2025-08-31T16:45:00',
      deadline: '2025-09-03T23:59:59'
    }
  ]);

  const [completedOrders] = useState([
    {
      id: 1003,
      user: 'Pierre Durand',
      game: 'Clash Royale',
      gameId: 'clash-royale',
      currentTrophies: 2000,
      targetTrophies: 3000,
      price: 25.30,
      commission: 12.65,
      status: 'completed',
      progress: 100,
      createdAt: '2025-08-29T14:20:00',
      completedAt: '2025-08-30T16:45:00',
      rating: 5
    },
    {
      id: 1002,
      user: 'Marie Dubois',
      game: 'Brawl Stars',
      gameId: 'brawl-stars',
      currentTrophies: 6500,
      targetTrophies: 9000,
      price: 43.70,
      commission: 21.85,
      status: 'completed',
      progress: 100,
      createdAt: '2025-08-28T09:15:00',
      completedAt: '2025-08-29T14:30:00',
      rating: 5
    }
  ]);

  const getStatusInfo = (status) => {
    const statusMap = {
      'assigned': {
        label: 'Assignée',
        color: 'bg-yellow-100 text-yellow-800',
        icon: Target
      },
      'in-progress': {
        label: 'En cours',
        color: 'bg-blue-100 text-blue-800',
        icon: TrendingUp
      },
      'completed': {
        label: 'Terminée',
        color: 'bg-green-100 text-green-800',
        icon: CheckCircle
      },
      'cancelled': {
        label: 'Annulée',
        color: 'bg-red-100 text-red-800',
        icon: AlertCircle
      }
    };
    return statusMap[status] || statusMap.assigned;
  };

  const getGameIcon = (gameId) => {
    return gameId === 'clash-royale' ? Trophy : Star;
  };

  const handleStartOrder = (orderId) => {
    // Logique pour commencer une commande
    console.log('Commencer la commande:', orderId);
  };

  const handleUpdateProgress = (orderId, newProgress) => {
    // Logique pour mettre à jour la progression
    console.log('Mettre à jour progression:', orderId, newProgress);
  };

  const handleCompleteOrder = (orderId) => {
    // Logique pour terminer une commande
    console.log('Terminer la commande:', orderId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Espace Vendeur
              </h1>
              <p className="text-gray-600">
                Gérez vos commandes et suivez vos performances
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">{stats.averageRating}/5</span>
              <span className="text-gray-600">({stats.completedOrders} avis)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="dashboard-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Gains totaux</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.totalEarnings.toFixed(2)}€
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
                  <p className="text-sm text-gray-600">Ce mois</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.thisMonthEarnings.toFixed(2)}€
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Commandes actives</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeOrders}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Terminées</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completedOrders}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Commandes assignées */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Commandes assignées</CardTitle>
          </CardHeader>
          <CardContent>
            {assignedOrders.length === 0 ? (
              <div className="text-center py-8">
                <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Aucune commande assignée
                </h3>
                <p className="text-gray-600">
                  Vous n'avez actuellement aucune commande assignée.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {assignedOrders.map((order) => {
                  const statusInfo = getStatusInfo(order.status);
                  const GameIcon = getGameIcon(order.gameId);
                  const isOverdue = new Date() > new Date(order.deadline);
                  
                  return (
                    <div key={order.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <GameIcon className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              Commande #{order.id} - {order.user}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {order.game}: {order.currentTrophies.toLocaleString()} → {order.targetTrophies.toLocaleString()} trophées
                            </p>
                            <p className="text-sm text-green-600 font-medium">
                              Commission: {order.commission.toFixed(2)}€
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={statusInfo.color}>
                            <statusInfo.icon className="mr-1 h-3 w-3" />
                            {statusInfo.label}
                          </Badge>
                          {isOverdue && (
                            <Badge className="bg-red-100 text-red-800 mt-1">
                              En retard
                            </Badge>
                          )}
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
                            <span>Échéance: {new Date(order.deadline).toLocaleDateString('fr-FR')}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {order.status === 'assigned' && (
                            <Button 
                              size="sm" 
                              onClick={() => handleStartOrder(order.id)}
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              Commencer
                            </Button>
                          )}
                          {order.status === 'in-progress' && (
                            <>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleUpdateProgress(order.id, order.progress + 10)}
                              >
                                Mettre à jour
                              </Button>
                              {order.progress >= 90 && (
                                <Button 
                                  size="sm" 
                                  onClick={() => handleCompleteOrder(order.id)}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  Terminer
                                </Button>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Historique des commandes terminées */}
        <Card>
          <CardHeader>
            <CardTitle>Commandes terminées récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {completedOrders.map((order) => {
                const GameIcon = getGameIcon(order.gameId);
                
                return (
                  <div key={order.id} className="border rounded-lg p-4 bg-green-50">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <GameIcon className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Commande #{order.id} - {order.user}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {order.game}: {order.currentTrophies.toLocaleString()} → {order.targetTrophies.toLocaleString()} trophées
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">
                          +{order.commission.toFixed(2)}€
                        </p>
                        <div className="flex items-center text-sm text-gray-600">
                          <Award className="mr-1 h-3 w-3 text-yellow-500" />
                          <span>{order.rating}/5</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Terminée le {new Date(order.completedAt).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VendeurPage;

