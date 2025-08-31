import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Trophy, Star, ArrowRight } from 'lucide-react';
import clashRoyaleImg from '../../assets/images/clash_royale_card_1.jpg';
import brawlStarsImg from '../../assets/brawl_stars_card_new.jpg';

const GamesPage = ({ onNavigate }) => {
  const games = [
    {
      id: 'clash-royale',
      name: 'Clash Royale',
      image: clashRoyaleImg,
      icon: Trophy,
      description: 'Montez en trophées rapidement et atteignez de nouveaux sommets dans Clash Royale',
      minTrophies: 1000,
      maxTrophies: 15000,
      minPrice: 2.18,
      maxPrice: 161.51,
      color: 'blue',
      features: [
        'Boost sécurisé et rapide',
        'Joueurs professionnels',
        'Garantie de résultat',
        'Support 24/7'
      ]
    },
    {
      id: 'brawl-stars',
      name: 'Brawl Stars',
      image: brawlStarsImg,
      icon: Star,
      description: 'Dominez l\'arène et grimpez dans le classement de Brawl Stars',
      minTrophies: 1000,
      maxTrophies: 100000,
      minPrice: 2.18,
      maxPrice: 371.78,
      color: 'purple',
      features: [
        'Boost multi-brawlers',
        'Stratégies avancées',
        'Progression garantie',
        'Équipe experte'
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services de Boost
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Choisissez votre jeu et laissez nos experts booster vos performances
          </p>
        </div>
      </div>

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {games.map((game) => {
            const colorClasses = getColorClasses(game.color);
            
            return (
              <Card key={game.id} className="game-card overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${colorClasses.bg} rounded-full flex items-center justify-center`}>
                      <game.icon className={`h-6 w-6 ${colorClasses.text}`} />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{game.name}</CardTitle>
                  <p className="text-gray-600">{game.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Prix et trophées */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Trophées</p>
                      <p className="font-bold text-lg">
                        {game.minTrophies.toLocaleString()} - {game.maxTrophies.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Prix</p>
                      <p className="font-bold text-lg text-green-600">
                        {game.minPrice}€ - {game.maxPrice}€
                      </p>
                    </div>
                  </div>

                  {/* Fonctionnalités */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Inclus dans le service :</h4>
                    <ul className="space-y-2">
                      {game.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 ${colorClasses.button} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bouton d'action */}
                  <Button 
                    className={`w-full ${colorClasses.button} text-white`}
                    onClick={() => onNavigate('trophies', { game: game.id })}
                  >
                    Calculer le prix
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Choisissez votre jeu</h3>
              <p className="text-gray-600 text-sm">
                Sélectionnez le jeu que vous souhaitez booster
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Configurez votre boost</h3>
              <p className="text-gray-600 text-sm">
                Définissez vos trophées actuels et votre objectif
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Profitez du résultat</h3>
              <p className="text-gray-600 text-sm">
                Nos experts s'occupent de tout, résultat garanti
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;

