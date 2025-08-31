import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Trophy, Zap, Shield, Star } from 'lucide-react';
import backgroundVideo from '../../assets/Video.mov';

const HomePage = ({ onNavigate }) => {
  const features = [
    {
      icon: Trophy,
      title: 'Boost de Trophées',
      description: 'Augmentez vos trophées rapidement et en toute sécurité'
    },
    {
      icon: Zap,
      title: 'Service Rapide',
      description: 'Résultats garantis en moins de 24h'
    },
    {
      icon: Shield,
      title: 'Sécurisé',
      description: 'Vos comptes sont protégés à 100%'
    },
    {
      icon: Star,
      title: 'Qualité Premium',
      description: 'Service de qualité professionnelle'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
            <source src={backgroundVideo} type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bienvenue sur <span className="text-yellow-300 font-orbitron">HeroBoost</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Boostez vos comptes et vos performances sur vos jeux préférés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100"
              onClick={() => onNavigate('games')}
            >
              Découvrir les services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600"
              onClick={() => onNavigate('dashboard')}
            >
              Tableau de bord
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir HeroBoost ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous offrons le meilleur service de boost pour vos jeux favoris
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jeux Supportés
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous proposons des services de boost pour les jeux les plus populaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="game-card cursor-pointer" onClick={() => onNavigate('games')}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Clash Royale</h3>
                <p className="text-gray-600 mb-4">
                  Boost de trophées de 1000 à 15000
                </p>
                <p className="text-sm text-green-600 font-medium">
                  À partir de 2,18€ pour 1000 trophées
                </p>
              </CardContent>
            </Card>

            <Card className="game-card cursor-pointer" onClick={() => onNavigate('games')}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Brawl Stars</h3>
                <p className="text-gray-600 mb-4">
                  Boost de trophées de 1000 à 100000
                </p>
                <p className="text-sm text-green-600 font-medium">
                  À partir de 2,18€ pour 1000 trophées
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à booster vos performances ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de joueurs qui nous font confiance
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100"
            onClick={() => onNavigate("games")}
          >
            Commencer maintenant
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;




      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que nos clients disent
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des milliers de joueurs satisfaits nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "Service incroyable ! J'ai atteint mon objectif de trophées en un temps record. Très professionnel et efficace."
                </p>
                <p className="font-semibold text-gray-900">- Julien D.</p>
                <p className="text-sm text-gray-500">Clash Royale</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "Super boost pour Brawl Stars ! Mon compte est au top maintenant. Je recommande vivement HeroBoost."
                </p>
                <p className="font-semibold text-gray-900">- Léa M.</p>
                <p className="text-sm text-gray-500">Brawl Stars</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "Fiable et rapide. J'étais sceptique au début, mais HeroBoost a dépassé toutes mes attentes. Merci !"
                </p>
                <p className="font-semibold text-gray-900">- Antoine P.</p>
                <p className="text-sm text-gray-500">Clash Royale</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


