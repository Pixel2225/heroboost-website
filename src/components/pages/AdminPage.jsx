import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Euro,
  Trophy,
  Star,
  CheckCircle,
  Clock,
  AlertCircle,
  UserCheck,
  UserX,
  Settings
} from 'lucide-react';

const AdminPage = () => {
  // Données simulées pour l'administration
  const [stats] = useState({
    totalUsers: 1247,
    totalOrders: 3456,
    totalRevenue: 45678.90,
    activeOrders: 89,
    completedToday: 23,
    newUsersToday: 12
  });

  const [orders] = useState([
    {
      id: 1001,
      user: 'Jean Dupont',
      userEmail: 'jean@email.com',
      game: 'Clash Royale',
      gameId: 'clash-royale',
      currentTrophies: 3500,
      targetTrophies: 5000,
      price: 45.50,
      status: 'in-progress',
      progress: 65,
      assignedTo: 'Booster Pro',
      createdAt: '2025-08-30T10:30:00',
      estimatedCompletion: '2025-08-31T18:00:00'
    },
    {
      id: 1002,
      user: 'Marie Martin',
      userEmail: 'marie@email.com',
      game: 'Brawl Stars',
      gameId: 'brawl-stars',
      currentTrophies: 15000,
      targetTrophies: 20000,
      price: 89.90,
      status: 'pending',
      progress: 0,
      assignedTo: null,
      createdAt: '2025-08-31T09:15:00'
    },
    {
      id: 1003,
      user: 'Pierre Durand',
      userEmail: 'pierre@email.com',
      game: 'Clash Royale',
      gameId: 'clash-royale',
      currentTrophies: 2000,
      targetTrophies: 3000,
      price: 25.30,
      status: 'completed',
      progress: 100,
      assignedTo: 'Booster Elite',
      createdAt: '2025-08-29T14:20:00',
      completedAt: '2025-08-30T16:45:00'
    }
  ]);

  const [users] = useState([
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean@email.com',
      role: 'client',
      status: 'active',
      totalOrders: 5,
      totalSpent: 234.50,
      joinedAt: '2025-07-15'
    },
    {
      id: 2,
      name: 'Marie Martin',
      email: 'marie@email.com',
      role: 'client',
      status: 'active',
      totalOrders: 3,
      totalSpent: 156.80,
      joinedAt: '2025-08-01'
    },
    {
      id: 3,
      name: 'Booster Pro',
      email: 'booster1@heroboost.com',
      role: 'vendeur',
      status: 'active',
      totalOrders: 45,
      totalEarned: 2345.60,
      joinedAt: '2025-06-01'
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

  const getUserStatusInfo = (status) => {
    const statusMap = {
      'active': {
        label: 'Actif',
        color: 'bg-green-100 text-green-800',
        icon: UserCheck
      },
      'inactive': {
        label: 'Inactif',
        color: 'bg-gray-100 text-gray-800',
        icon: UserX
      },
      'banned': {
        label: 'Banni',
        color: 'bg-red-100 text-red-800',
        icon: UserX
      }
    };
    return statusMap[status] || statusMap.active;
  };

  const getGameIcon = (gameId) => {
    return gameId === 'clash-royale' ? Trophy : Star;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Administration
              </h1>
              <p className="text-gray-600">
                Gestion complète de la plateforme HeroBoost
              </p>
            </div>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Paramètres
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistiques globales */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <Card className="dashboard-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">Utilisateurs</p>
                  <p className="text-xl font-bold text-gray-900">{stats.totalUsers}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">Commandes</p>
                  <p className="text-xl font-bold text-gray-900">{stats.totalOrders}</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">Revenus</p>
                  <p className="text-xl font-bold text-gray-900">{stats.totalRevenue.toFixed(0)}€</p>
                </div>
                <Euro className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">En cours</p>
                  <p className="text-xl font-bold text-gray-900">{stats.activeOrders}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">Terminées aujourd'hui</p>
                  <p className="text-xl font-bold text-gray-900">{stats.completedToday}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">Nouveaux utilisateurs</p>
                  <p className="text-xl font-bold text-gray-900">{stats.newUsersToday}</p>
                </div>
                <UserCheck className="h-8 w-8 text-indigo-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onglets de gestion */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="orders">Gestion des commandes</TabsTrigger>
            <TabsTrigger value="users">Gestion des utilisateurs</TabsTrigger>
          </TabsList>

          {/* Gestion des commandes */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Commandes récentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => {
                    const statusInfo = getStatusInfo(order.status);
                    const GameIcon = getGameIcon(order.gameId);
                    
                    return (
                      <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                              <GameIcon className="h-5 w-5 text-gray-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                Commande #{order.id}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {order.user} ({order.userEmail})
                              </p>
                              <p className="text-sm text-gray-600">
                                {order.game}: {order.currentTrophies.toLocaleString()} → {order.targetTrophies.toLocaleString()} trophées
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

                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-4">
                            <span>Créée: {new Date(order.createdAt).toLocaleDateString('fr-FR')}</span>
                            {order.assignedTo && (
                              <span>Assignée à: {order.assignedTo}</span>
                            )}
                            {order.status === 'in-progress' && (
                              <span>Progression: {order.progress}%</span>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            {order.status === 'pending' && (
                              <Button size="sm" variant="outline">
                                Assigner
                              </Button>
                            )}
                            <Button size="sm" variant="outline">
                              Détails
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gestion des utilisateurs */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Utilisateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => {
                    const statusInfo = getUserStatusInfo(user.status);
                    
                    return (
                      <div key={user.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                              <Users className="h-5 w-5 text-gray-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {user.name}
                              </h3>
                              <p className="text-sm text-gray-600">{user.email}</p>
                              <p className="text-sm text-gray-600 capitalize">
                                Rôle: {user.role}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={statusInfo.color}>
                              <statusInfo.icon className="mr-1 h-3 w-3" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Commandes</p>
                            <p className="font-semibold">{user.totalOrders}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">
                              {user.role === 'vendeur' ? 'Gains' : 'Dépenses'}
                            </p>
                            <p className="font-semibold">
                              {(user.totalSpent || user.totalEarned || 0).toFixed(2)}€
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-600">Inscription</p>
                            <p className="font-semibold">
                              {new Date(user.joinedAt).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              Modifier
                            </Button>
                            {user.status === 'active' ? (
                              <Button size="sm" variant="outline" className="text-red-600">
                                Suspendre
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline" className="text-green-600">
                                Activer
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;

