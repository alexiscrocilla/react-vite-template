# React + Vite Template

Template de base pour le développement frontend avec **React 18**, **Vite** et **TypeScript**.

## Prérequis

- **Node.js** 18+ (recommandé : LTS)

## Installation

```bash
npm install
```

## Scripts

| Commande      | Description                    |
|---------------|--------------------------------|
| `npm run dev` | Lance le serveur de dev (port 5173) |
| `npm run build` | Build de production (`dist/`)   |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérification ESLint             |
| `npm run test` | Lance les tests (Vitest)       |

## Structure du projet

```
src/
├── assets/      # Images, polices, etc.
├── components/  # Composants réutilisables
├── hooks/       # Hooks personnalisés
├── pages/       # Pages / vues
├── styles/      # CSS global, variables
├── App.tsx
└── main.tsx
```

Les imports peuvent utiliser l’alias `@/` pour `src/` :

```ts
import { MyComponent } from '@/components/MyComponent'
```

## Variables d’environnement

Copier `.env.example` vers `.env` et renseigner les valeurs. Les variables préfixées par `VITE_` sont exposées au client.

## Documentation

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
