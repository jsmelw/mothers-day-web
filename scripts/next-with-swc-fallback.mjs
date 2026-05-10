import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);

function shouldUseLocalWasmFallback() {
  if (process.platform !== "win32" || process.arch !== "x64") {
    return false;
  }

  try {
    require("@next/swc-win32-x64-msvc");
    return false;
  } catch {
    return true;
  }
}

if (shouldUseLocalWasmFallback()) {
  const wasmDirectory = resolve("node_modules/@next/swc-wasm-nodejs");

  if (existsSync(resolve(wasmDirectory, "wasm.js"))) {
    process.env.NEXT_TEST_WASM ??= "1";
    process.env.NEXT_TEST_WASM_DIR ??= wasmDirectory;
  }
}

await import("next/dist/bin/next");
