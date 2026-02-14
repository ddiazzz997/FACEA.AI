
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Carga las variables de entorno según el modo (development/production)
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Esto permite que el código use process.env.API_KEY en Vercel
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});
