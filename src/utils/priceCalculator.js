// Configuration des prix pour chaque jeu
export const GAME_CONFIGS = {
  'clash-royale': {
    name: 'Clash Royale',
    minTrophies: 1000,
    maxTrophies: 15000,
    minPrice: 2.18,
    maxPrice: 161.51,
    // Fonction de calcul du prix basée sur une progression non-linéaire
    calculatePrice: (currentTrophies, targetTrophies) => {
      const trophyDifference = targetTrophies - currentTrophies;
      
      if (trophyDifference <= 0) return 0;
      
      // Prix de base par 1000 trophées
      const basePricePerK = 2.18;
      
      // Facteur de difficulté qui augmente avec le niveau de trophées cible
      const difficultyFactor = 1 + (targetTrophies / 15000) * 2;
      
      // Calcul du prix avec progression non-linéaire
      const pricePerTrophy = (basePricePerK / 1000) * difficultyFactor;
      const totalPrice = trophyDifference * pricePerTrophy;
      
      // S'assurer que le prix reste dans les limites
      const minPossiblePrice = (trophyDifference / 1000) * 2.18;
      const maxPossiblePrice = 161.51;
      
      return Math.min(Math.max(totalPrice, minPossiblePrice), maxPossiblePrice);
    }
  },
  'brawl-stars': {
    name: 'Brawl Stars',
    minTrophies: 1000,
    maxTrophies: 100000,
    minPrice: 2.18,
    maxPrice: 371.78,
    // Fonction de calcul du prix basée sur une progression non-linéaire
    calculatePrice: (currentTrophies, targetTrophies) => {
      const trophyDifference = targetTrophies - currentTrophies;
      
      if (trophyDifference <= 0) return 0;
      
      // Prix de base par 1000 trophées
      const basePricePerK = 2.18;
      
      // Facteur de difficulté qui augmente avec le niveau de trophées cible
      const difficultyFactor = 1 + (targetTrophies / 100000) * 3;
      
      // Calcul du prix avec progression non-linéaire
      const pricePerTrophy = (basePricePerK / 1000) * difficultyFactor;
      const totalPrice = trophyDifference * pricePerTrophy;
      
      // S'assurer que le prix reste dans les limites
      const minPossiblePrice = (trophyDifference / 1000) * 2.18;
      const maxPossiblePrice = 371.78;
      
      return Math.min(Math.max(totalPrice, minPossiblePrice), maxPossiblePrice);
    }
  }
};

// Fonction principale de calcul du prix
export const calculateTrophyPrice = (gameId, currentTrophies, targetTrophies) => {
  const config = GAME_CONFIGS[gameId];
  
  if (!config) {
    throw new Error(`Configuration non trouvée pour le jeu: ${gameId}`);
  }
  
  // Validation des entrées
  if (currentTrophies < config.minTrophies || currentTrophies > config.maxTrophies) {
    throw new Error(`Trophées actuels invalides. Doit être entre ${config.minTrophies} et ${config.maxTrophies}`);
  }
  
  if (targetTrophies < config.minTrophies || targetTrophies > config.maxTrophies) {
    throw new Error(`Trophées cibles invalides. Doit être entre ${config.minTrophies} et ${config.maxTrophies}`);
  }
  
  if (targetTrophies <= currentTrophies) {
    throw new Error('Les trophées cibles doivent être supérieurs aux trophées actuels');
  }
  
  const price = config.calculatePrice(currentTrophies, targetTrophies);
  
  return {
    price: Math.round(price * 100) / 100, // Arrondir à 2 décimales
    trophyDifference: targetTrophies - currentTrophies,
    pricePerTrophy: Math.round((price / (targetTrophies - currentTrophies)) * 10000) / 10000
  };
};

// Fonction pour obtenir le prix estimé en temps réel pendant le glissement
export const getEstimatedPrice = (gameId, currentTrophies, targetTrophies) => {
  try {
    return calculateTrophyPrice(gameId, currentTrophies, targetTrophies);
  } catch (error) {
    return {
      price: 0,
      trophyDifference: 0,
      pricePerTrophy: 0,
      error: error.message
    };
  }
};

// Fonction pour formater le prix
export const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
};

// Fonction pour formater les trophées
export const formatTrophies = (trophies) => {
  return new Intl.NumberFormat('fr-FR').format(trophies);
};

