import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      /* pass your config */
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
});
