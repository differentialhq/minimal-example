import { d } from "../d";
import type { crawlerService } from "./crawler-service";

export const search = async (query: string) => {
  console.log("searching for", query);

  const snakeCaseQuery = query.replace(" ", "_");

  const wikipediaUrl = `https://en.wikipedia.org/wiki/${snakeCaseQuery}`;

  console.log("wikipediaUrl", wikipediaUrl);

  const allText = await d.call<typeof crawlerService, "getAllText">(
    "getAllText",
    wikipediaUrl
  );

  return {
    allText,
  };
};

export const getAllImages = async (query: string) => {
  const snakeCaseQuery = query.replace(" ", "_");

  const wikipediaUrl = `https://en.wikipedia.org/wiki/${snakeCaseQuery}`;

  const allImages = await d.call<typeof crawlerService, "getImages">(
    "getImages",
    wikipediaUrl
  );

  return {
    allImages,
  };
};

export const wikipediaService = d.service({
  name: "wikipedia",
  functions: {
    search,
    getAllImages,
  },
});

// this registers a service at api.differential.dev
// under the api secret, and makes it available for
// any d.call() function which uses the same api secret
wikipediaService.start();
