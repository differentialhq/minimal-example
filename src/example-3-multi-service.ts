import { d } from "./d";
import type { wikipediaService } from "./services/wikipedia-service";

(async function () {
  const text = d.call<typeof wikipediaService, "search">("search", "picasso");
  console.log(text);
})();
