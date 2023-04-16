import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import vue from "@vitejs/plugin-vue";
import { resolve, dirname } from "path";
import legacy from "@vitejs/plugin-legacy";
import commonjs from "rollup-plugin-commonjs";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import externalGlobals from "rollup-plugin-external-globals";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        "pinia",
        "vue-i18n",
        "@vueuse/core",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
      dts: "src/types/auto-imports.d.ts",
    }),
    Components({
      dirs: ["src/components"],
      resolvers: [NaiveUiResolver()],
      directoryAsNamespace: true,
      dts: "src/types/components.d.ts",
    }),
    UnoCSS({ mode: "vue-scoped" }),
    VueI18n({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./path/to/src/locales/**"
      ),
    }),
    legacy({ targets: ["defaults", "not IE 11"] }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      api: resolve(__dirname, "src/api"),
      utils: resolve(__dirname, "@/utils"),
      views: resolve(__dirname, "src/views"),
      locales: resolve(__dirname, "locales"),
      store: resolve(__dirname, "src/store"),
      components: resolve(__dirname, "src/components"),
    },
  },
  build: {
    minify: "terser",
    target: "es2015",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      // external: [
      //   "vue",
      //   "vue-router",
      //   "naive-ui",
      //   "vue-demi",
      //   "pinia",
      //   "axios",
      //   "vue-i18n",
      // ],
      // plugins: [
      //   commonjs(),
      //   externalGlobals({
      //     vue: "Vue",
      //     "vue-demi": "VueDemi",
      //     axios: "axios",
      //     pinia: "Pinia",
      //     "vue-router": "VueRouter",
      //     "naive-ui": "naive",
      //     "vue-i18n": "VueI18n",
      //   }),
      // ],
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      },
    },
  },
  server: {
    open: true,
    host: true,
  },
});
