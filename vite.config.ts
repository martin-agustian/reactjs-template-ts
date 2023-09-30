import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
    alias: {
      apis: `${path.resolve(__dirname, "./src/apis/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      guards: `${path.resolve(__dirname, "./src/guards/")}`,
      helpers: `${path.resolve(__dirname, "./src/helpers/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      stores: `${path.resolve(__dirname, "./src/stores/")}`,
    }
  },
});
