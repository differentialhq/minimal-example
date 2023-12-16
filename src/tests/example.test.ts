import test from "node:test";
import { helloService } from "../services/hello-service";
import { d } from "../d";
import assert from "node:assert";

test("example", async (t) => {
  // start the service
  helloService.start();

  const greeting = await d.call<typeof helloService, "hello">(
    "hello",
    `process ${process.pid}`
  );

  assert.match(
    greeting,
    /Hello, process \d+! I'm running on [a-z]+ and on pid=\d+/
  );

  console.log("stopping service");

  // why the fuck is this service not stopping?

  // stop the service
  await helloService.stop();

  console.log("stopped service");
});
