// ==|== Imports ===================================================================================
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// ==|== Config ====================================================================================
export default defineConfig({
  plugins: [vue()],
  alias: {
    "@": resolve(__dirname, "src")
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/assets/scss/main.scss';"
      }
    }
  }
});
