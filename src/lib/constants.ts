// Configuration de l'application
export const APP_NAME = "Let's Eat!";
export const APP_DESCRIPTION = "Plateforme de recettes collaborative";

// Limites
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
export const MAX_INGREDIENTS = 30;
export const MAX_STEPS = 20;

// Difficultés
export const DIFFICULTIES = {
  easy: 'Facile',
  medium: 'Moyen',
  hard: 'Difficile',
} as const;