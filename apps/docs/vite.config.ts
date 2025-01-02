import fs from "node:fs";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, type PluginOption } from "vite";

const postBuild = (): PluginOption => {
  return {
    name: "postbuild",
    closeBundle: () => {
      console.info("\x1b[32mrunning postbuild script...\x1b[0m");

      const scriptsPath = path.join(
        import.meta.dirname,
        "/node_modules/@chuni-tools/scripts/dist",
      );
      const exists = fs.existsSync(scriptsPath);

      if (!exists) {
        const error = new Error(
          "@chuni-tools/scripts not found, skipping postbuild script",
        );
        console.error(`\x1b[31m${error.message}\x1b[0m`);
        throw error;
      }

      const jsFilePaths = path.join(scriptsPath, "/*.js");
      const scriptFilePaths = fs.globSync(jsFilePaths);

      if (scriptFilePaths.length === 0) {
        const error = new Error(
          "@chuni-tools/scripts not found, skipping postbuild script",
        );
        console.error(`\x1b[31m${error.message}\x1b[0m`);
        throw error;
      }

      for (const scriptFilePath of scriptFilePaths) {
        const fileName = path.basename(scriptFilePath);
        const docsBuildPath = path.join(
          import.meta.dirname,
          `/dist/${fileName}`,
        );
        fs.copyFileSync(scriptFilePath, docsBuildPath);
        console.info(`\x1b[34mcopying ${fileName}\x1b[0m`);
      }

      console.info("\x1b[32mpostbuild script completed\x1b[0m");
    },
  };
};

export default defineConfig({
  plugins: [react(), postBuild()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
