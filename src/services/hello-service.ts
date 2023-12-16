import process from "process";
import { d } from "../d";

export const hello = async (from: string) => {
  console.log("hello function called", from);
  return `Hello, ${from}! I'm running on ${process.platform} and on pid=${process.pid}.`;
};

export const helloService = d.service({
  name: "hello",
  functions: {
    hello,
  },
});

// this registers a service at api.differential.dev
// under the api secret, and makes it available for
// any d.call() function which uses the same api secret
helloService.start();

console.log("hello service started");

process.on("beforeExit", async () => {
  console.log("stopping hello service");
  await helloService.stop();
});
