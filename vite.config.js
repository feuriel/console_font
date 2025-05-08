import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  // Library build configuration
  if (command === "build" && mode === "library") {
    return {
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.js"),
          name: "ConsoleFont",
          fileName: (format) => `console-font.${format}.js`,
          formats: ["es"],
        },
        rollupOptions: {
          output: {
            preserveModules: true,
            preserveModulesRoot: "src",
            entryFileNames: "[name].js",
            chunkFileNames: "chunks/[name].js",
            assetFileNames: "assets/[name].[ext]",
          },
        },
        minify: true,
        sourcemap: true,
        emptyOutDir: true,
      },
    };
  }

  // Examples development and build configuration
  return {
    root: resolve(__dirname, "src/examples"),
    publicDir: resolve(__dirname, "public"),
    server: {
      open: "/exampleLoggers/index.html",
    },
    build: {
      outDir: resolve(__dirname, "dist-examples"),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "src/examples/exampleLoggers/index.html"),
          //example2: resolve(__dirname, "src/examples/example2/index.html"),
        },
      },
    },
  };
});
