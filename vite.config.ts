import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // aliases
  resolve: {
    alias: {
      components: "/src/components",
      libs: "/src/libs/",
      styles: "/src/styles/"
    },
  },
  base: "./",
  build: {
    outDir: "./docs",
  },
});