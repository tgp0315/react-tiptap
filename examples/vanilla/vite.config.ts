import * as path from "path";
import { defineConfig } from "vite";
// import eslintPlugin from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig((conf) => ({
  plugins: [],
  optimizeDeps: {
    // link: ['vite-react-ts-components'],
  },
  build: {
    sourcemap: true,
  }
}));
