import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  banner: {
    js: "#!/usr/bin/env node",
  },
});
