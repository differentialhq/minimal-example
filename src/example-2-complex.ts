import { d } from "./d";
import type { crawlerService } from "./services/crawler-service";

(async function () {
  const images = await d.call<typeof crawlerService, "getImages">(
    "getImages",
    "https://en.wikipedia.org/wiki/Pablo_Picasso"
  );

  console.log({ images });
})();
