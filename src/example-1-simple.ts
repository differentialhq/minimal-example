import { d } from "./d";
import type { helloService } from "./services/hello-service";
import process from "process";

(async function () {
  console.log("calling hello service");

  // this .call is fully typesafe, and the type-safety is enforced
  // via generics. you can pass in any serializable arguments you
  // want, and accept any serializable return value you want.
  //
  // this function will be served by the helloService
  const greeting = await d.call<typeof helloService, "hello">(
    "hello",
    `process ${process.pid}`
  );

  console.log({ greeting });
})();
