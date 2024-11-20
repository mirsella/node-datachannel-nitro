import nodeDataChannel from "node-datachannel";

export default eventHandler((event) => {
  nodeDataChannel.initLogger("Debug");
});
