const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

esbuild
  .build({
    entryPoints: ["./src/**.ts"],
    outdir: "./dist",
    bundle: true,
    minify: true,
    platform: "node",
    sourcemap: true,
    target: "node22",
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1));
