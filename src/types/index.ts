// Types de base pour les recettes
export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  cookingTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  ingredients: Ingredient[];
  steps: string[];
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: Date;
}