import { d } from "./d";
import type { crawlerService } from "./services/crawler-service";

// this is a more complex example, where we call a service that
// returns a complex object.
//
// the crawlerService.getImages is a function crawling a website
// and returning a list of images that it found on the page.
(async function () {
  const images = await d.call<typeof crawlerService, "getImages">(
    "getImages",
    "https://en.wikipedia.org/wiki/Pablo_Picasso"
  );

  console.log({ images });
})();
