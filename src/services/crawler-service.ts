import { d } from "../d";

export const getAllText = async (url: string) => {
  console.log("getting all text for", url);

  const texts: Record<string, string> = {};

  const response = await fetch(url);
  const text = await response.text();
  texts[url] = text;

  // for each link, get the text
  const links = text.match(/https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g) || [];

  console.log("Retrieved links", links.splice(0, 10));

  for (const link of links) {
    console.log("getting text for", link);
    const response = await fetch(link);
    const text = await response.text();
    texts[link] = text;
  }

  return {
    allText: text,
  };
};

export const getLinks = async (url: string) => {
  const response = await fetch(url);
  const text = await response.text();

  // for each link, get the text
  const links = text.match(/https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g) || [];

  return {
    links,
  };
};

export const getImages = async (url: string) => {
  const response = await fetch(url);
  const text = await response.text();

  // for each link, get the text
  const images =
    text.match(/https?:\/\/[^\\'">\s]+?\.(jpg|jpeg|gif|png)/g) || [];

  return {
    images,
  };
};

export const crawlerService = d.service({
  name: "crawler",
  functions: {
    getAllText,
    getLinks,
    getImages,
  },
});

// this registers a service at api.differential.dev
// under the api secret, and makes it available for
// any d.call() function which uses the same api secret
crawlerService.start();
