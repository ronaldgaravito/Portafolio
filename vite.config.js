import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Estas optimizaciones dividen el código para que el navegador lo cargue más rápido
    rollupOptions: {
      output: {
        manualChunks: {
          // Separamos Three.js (que es muy pesado) en su propio archivo
          "three-vendor": ["three", "@react-three/fiber"],
          // Separamos React en su propio archivo
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
    // Limpia alertas de tamaño de archivo (chunk size) al compilar
    chunkSizeWarningLimit: 800,
  },
});
