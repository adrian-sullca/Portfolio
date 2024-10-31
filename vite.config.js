import { defineConfig } from "vite";

export default defineConfig({
  root: "./public", // Root directory for Vite
  base: "./", // Use relative paths for assets
  build: {
    outDir: "../dist", // Output directory for the build
    rollupOptions: {
      input: "./public/index.html", // Entry point for the build
    },
  },
  server: {
    watch: {
      usePolling: true, // Ensures changes are detected in some environments
    },
  },
});
