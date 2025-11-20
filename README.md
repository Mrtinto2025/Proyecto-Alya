# Proyecto Alya

Pequeño proyecto creado con Vite + React que contiene un personaje/waifu llamado **Alya**.

Comandos principales:

```
npm install
npm run dev
npm run build
npm run preview
```

Despliegue en Vercel:

- Conecta tu repo de GitHub en https://vercel.com
- Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

Estructura mínima creada:

- `src/components/Alya.jsx` — componente del avatar/nombre
- `src/components/Menu.jsx` — menú superior y navegación
- `src/pages/Home.jsx`, `About.jsx`, `Gallery.jsx` — páginas básicas

Siguientes pasos sugeridos:

- Añadir `react-router-dom` si no está instalado: `npm install react-router-dom`
- Agregar estilos (Tailwind, Chakra o tu CSS preferido)
- Sustituir el avatar placeholder por imágenes o animaciones (Lottie / SVG)
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
