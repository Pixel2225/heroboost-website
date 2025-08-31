import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Slider } from '../ui/slider';
import { Alert, AlertDescription } from '../ui/alert';
import { Trophy, Star, Calculator, ShoppingCart, ArrowLeft } from 'lucide-react';
import { GAME_CONFIGS, getEstimatedPrice, formatPrice, formatTrophies } from '../../utils/priceCalculator';
import clashRoyaleImg from '../../assets/images/clash_royale_card_2.jpg';
import brawlStarsImg from '../../assets/images/brawl_stars_card_2.jpg';

const TrophyCalculatorPage = ({ gameId, onNavigate }) => {
  const [currentTrophies, setCurrentTrophies] = useState(1000);
  const [targetTrophies, setTargetTrophies] = useState(2000);
  const [calculation, setCalculation] = useState(null);
  const [error, setError] = useState('');

  const gameConfig = GAME_CONFIGS[gameId];
  
  if (!gameConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Jeu non trouvé</h1>
          <Button onClick={() => onNavigate('games')}>
            Retour aux jeux
          </Button>
        </div>
      </div>
    );
  }

  const gameImages = {
    'clash-royale': clashRoyaleImg,
    'brawl-stars': brawlStarsImg
  };

  const gameIcons = {
    'clash-royale': Trophy,
    'brawl-stars': Star
  };

  const GameIcon = gameIcons[gameId];

  // Recalculer le prix à chaque changement
  useEffect(() => {
    const result = getEstimatedPrice(gameId, currentTrophies, targetTrophies);
    
    if (result.error) {
      setError(result.error);
      setCalculation(null);
    } else {
      setError('');
      setCalculation(result);
    }
  }, [gameId, currentTrophies, targetTrophies]);

  // Gérer le changement des trophées actuels
  const handleCurrentTrophiesChange = (value) => {
    const newValue = value[0];
    setCurrentTrophies(newValue);
    
    // S'assurer que les trophées cibles restent supérieurs
    if (newValue >= targetTrophies) {
      setTargetTrophies(Math.min(newValue + 1000, gameConfig.maxTrophies));
    }
  };

  // Gérer le changement des trophées cibles
  const handleTargetTrophiesChange = (value) => {
    const newValue = value[0];
    setTargetTrophies(newValue);
    
    // S'assurer que les trophées actuels restent inférieurs
    if (newValue <= currentTrophies) {
      setCurrentTrophies(Math.max(newValue - 1000, gameConfig.minTrophies));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('games')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-3">
              <GameIcon className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Calculateur - {gameConfig.name}
                </h1>
                <p className="text-gray-600">
                  Configurez votre boost et obtenez un devis instantané
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculateur */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>Configuration du boost</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Trophées actuels */}
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Trophées actuels: {formatTrophies(currentTrophies)}
                </Label>
                <Slider
                  value={[currentTrophies]}
                  onValueChange={handleCurrentTrophiesChange}
                  min={gameConfig.minTrophies}
                  max={gameConfig.maxTrophies - 1000}
                  step={100}
                  className="trophy-slider"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{formatTrophies(gameConfig.minTrophies)}</span>
                  <span>{formatTrophies(gameConfig.maxTrophies - 1000)}</span>
                </div>
              </div>

              {/* Trophées cibles */}
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Trophées cibles: {formatTrophies(targetTrophies)}
                </Label>
                <Slider
                  value={[targetTrophies]}
                  onValueChange={handleTargetTrophiesChange}
                  min={currentTrophies + 100}
                  max={gameConfig.maxTrophies}
                  step={100}
                  className="trophy-slider"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{formatTrophies(currentTrophies + 100)}</span>
                  <span>{formatTrophies(gameConfig.maxTrophies)}</span>
                </div>
              </div>

              {/* Résumé */}
              {calculation && (
                <div className="bg-green-50 p-6 rounded-lg space-y-4">
                  <h3 className="font-semibold text-green-900">Résumé de votre boost</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Trophées à gagner</p>
                      <p className="font-bold text-lg">{formatTrophies(calculation.trophyDifference)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Prix par trophée</p>
                      <p className="font-bold text-lg">{formatPrice(calculation.pricePerTrophy)}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-gray-600 text-sm">Prix total</p>
                    <p className="font-bold text-3xl text-green-600">
                      {formatPrice(calculation.price)}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Aperçu du jeu et commande */}
          <div className="space-y-6">
            {/* Image du jeu */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={gameImages[gameId]} 
                  alt={gameConfig.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold">{gameConfig.name}</h2>
                  <p className="text-white/90">Service de boost professionnel</p>
                </div>
              </div>
            </Card>

            {/* Informations du service */}
            <Card>
              <CardHeader>
                <CardTitle>Détails du service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Temps estimé</p>
                    <p className="font-semibold">24-48h</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Garantie</p>
                    <p className="font-semibold">100%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Support</p>
                    <p className="font-semibold">24/7</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Sécurité</p>
                    <p className="font-semibold">Maximale</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Inclus dans le service :</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Boost par des joueurs professionnels</li>
                    <li>• Progression en temps réel</li>
                    <li>• Support client dédié</li>
                    <li>• Garantie de résultat</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Bouton de commande */}
            {calculation && !error && (
              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div>
                      <p className="text-gray-600">Prix total</p>
                      <p className="text-3xl font-bold text-green-600">
                        {formatPrice(calculation.price)}
                      </p>
                    </div>
                    <Button 
                      size="lg" 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => onNavigate('dashboard')}
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Commander ce boost
                    </Button>
                    <p className="text-xs text-gray-500">
                      Paiement sécurisé • Résultat garanti
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrophyCalculatorPage;

