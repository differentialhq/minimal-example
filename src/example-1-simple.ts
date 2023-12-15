import { d } from "./d";
import type { helloService } from "./services/hello-world";
import process from "process";

(async function () {
  const greeting = await d.call<typeof helloService, "hello">(
    "hello",
    `process ${process.pid}`
  );

  console.log({ greeting });
})();
