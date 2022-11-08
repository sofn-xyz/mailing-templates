/*
 * If you want to use local assets while developing new templates,
 * run `yarn dev:local-assets` instead of `yarn dev`
 *
 * NOTE: This will cause the email linter to throw errors
 */

const ASSET_URL = "https://fynn-mailing.vercel.app";

export default function assetUrl(url) {
  if (url.startsWith("/") && !process.env.LOCAL_ASSETS) {
    return `${ASSET_URL}${url}`;
  }

  return url;
}
