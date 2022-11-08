const assetUrl = (url) => {
  if (url.startsWith("/")) {
    if (process.env.ASSET_URL) {
      return `${process.env.ASSET_URL}${url}`;
    } else {
      return `http://localhost:3883${url}`;
    }
  }

  return url;
};

export default assetUrl;
