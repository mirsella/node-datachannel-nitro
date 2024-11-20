//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2024-11-20",
  // fix the first compilation issue, but still errors for nitrojs HMR
  // externals: {
  //   traceInclude: [
  //     "./node_modules/node-datachannel/build/Release/node_datachannel.node",
  //   ],
  // },
});
