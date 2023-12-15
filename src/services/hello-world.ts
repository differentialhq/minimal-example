import process from "process";
import { d } from "../d";

export const hello = async (from: string) => {
  return `Hello, ${from}! I'm running on ${process.platform} and on pid=${process.pid}.`;
};

export const helloService = d.service({
  name: "hello",
  functions: {
    hello,
  },
});

helloService.start();
