import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lifeguard/',
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@providers": "/src/providers",
      "@utils": "/src/utils",
      "@views": "/src/views",
    },
  },
});
