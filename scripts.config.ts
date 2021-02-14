import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run --allow-net --allow-read ./backend/server.ts",
      desc: "run my server.ts file",
    },
  },
  watcher: {
    // The number of milliseconds after the last change.
    interval: 350,
    // The file extensions that it will scan for.
    exts: ["js", "jsx", "ts", "tsx", "json"],
    // The globs that it will scan for.
    match: ["./backend/**/*.*"],
    // The globs that it will not scan for.
    skip: ["*/.git/*", "./node_modules"],
    // Use the legacy file monitoring algorithm. (walking)
    legacy: false,
  },
};

export default config;
