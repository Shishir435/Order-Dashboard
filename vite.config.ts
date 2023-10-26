import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import proxy from "vite-plugin-proxy";
export default defineConfig({
  plugins: [react(), proxy({
    // Replace with your specific Firebase authentication URL
    '/auth': 'https://fir-49c0d.firebaseapp.com',
    changeOrigin: true,
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
