import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./", // Directori root de Vite
  base: "./", // Rutes relatives per als assets
  build: {
    outDir: "dist", // Directori de sortida per al build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"), 
        sobreMi: path.resolve(__dirname, "src/pages/sobre-mi.html"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true, // Per assegurar que els canvis es detecten en alguns entorns
    },
  },
});
