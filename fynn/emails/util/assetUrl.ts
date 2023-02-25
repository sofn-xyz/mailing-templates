/*
 * If you want to use local assets while developing new templates,
 * run `yarn dev:local-assets` instead of `yarn dev`
 *
 * NOTE: This will cause the email linter to throw errors
 */

const ASSET_URL =
  "https://raw.githubusercontent.com/sofn-xyz/mailing-templates/main/fynn/emails";

export default function assetUrl(url: string) {
  if (url.startsWith("/") && !process.env.LOCAL_ASSETS) {
    return `${ASSET_URL}${url}`;
  }

  return url;
}
