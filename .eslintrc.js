
module.exports = {
  "extends": [
    "next/core-web-vitals", // Recomendado por Next.js
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Reglas de TypeScript
    "plugin:react/recommended", // Reglas de React
    "plugin:react-hooks/recommended" // Reglas de Hooks de React
  ],
  "env": {
    "browser": true,
    "es2021": true,
  },
  "parser": "@typescript-eslint/parser", // Analizador para TypeScript
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true, // Permitir JSX
    },
    "ecmaVersion": 12,
    "sourceType": "module", // Usar módulos de ECMAScript
  },
  "plugins": [
    "react", // Plugin de React
    "@typescript-eslint", // Plugin de TypeScript
  ],
  "rules": {
    "react/prop-types": "off", // Desactiva la validación de PropTypes ya que usas TypeScript
    // Agrega otras reglas personalizadas aquí si es necesario
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
  },
};
