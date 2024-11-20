`pnpm dev`:

```
[worker reload] [Error: [worker init] /home/mirsella/dev/nitro-app/.nitro/dev/index.mjs failed] {
  [cause]: Error: Cannot find module '../../build/Release/node_datachannel.node'
  Require stack:
  - /home/mirsella/dev/nitro-app/node_modules/.pnpm/node-datachannel@0.21.0/node_modules/node-datachannel/dist/esm/lib/node-datachannel.mjs
      at Function._resolveFilename (node:internal/modules/cjs/loader:1246:15)
      at Function._load (node:internal/modules/cjs/loader:1072:27)
      at TracingChannel.traceSync (node:diagnostics_channel:322:14)
      at wrapModuleLoad (node:internal/modules/cjs/loader:216:24)
      at Module.require (node:internal/modules/cjs/loader:1337:12)
      at require (node:internal/modules/helpers:139:16)
      at file:///home/mirsella/dev/nitro-app/node_modules/.pnpm/node-datachannel@0.21.0/node_modules/node-datachannel/dist/esm/lib/node-datachannel.mjs:13:21
      at ModuleJob.run (node:internal/modules/esm/module_job:268:25)
      at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:543:26)
      at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5) {
    code: 'MODULE_NOT_FOUND',
    requireStack: [
      '/home/mirsella/dev/nitro-app/node_modules/.pnpm/node-datachannel@0.21.0/node_modules/node-datachannel/dist/esm/lib/node-datachannel.mjs'
    ]
  }
}
```
