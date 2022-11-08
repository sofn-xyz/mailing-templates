/*
 * If you want to use local assets while developing new templates,
 * comment out the following line.
 *
 * NOTE: This is cause the email linter to throw errors
 */
const ASSET_URL = "https://fynn-mailing.vercel.app";

const assetUrl = (url) => {
  if (url.startsWith("/") && typeof ASSET_URL !== "undefined") {
    return `${ASSET_URL}${url}`;
  }

  return url;
};

export default assetUrl;
