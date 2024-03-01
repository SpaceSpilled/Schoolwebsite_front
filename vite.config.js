// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // lib: {
//   //   entry: "./src/main.jsx",
//   //   name: "core-package",
//   //   fileName: "main",
//   // },
//   // build: {
//   //   rollupOptions: {
//   //     external: ["react", "react-router", "react-router-dom", "react-redux"],
//   //   },
//   //   output: {
//   //     globals: {
//   //       react: "React",
//   //     },
//   //   },
//   // },
// });

import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [react()],
});
