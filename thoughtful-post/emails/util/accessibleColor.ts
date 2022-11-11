// Returns a color (black or white) that is visually accessible on top of the given background color.
export default function accessibleColor(
  color: string,
  dark: string,
  light: string
) {
  const isHEX = color.indexOf("#") == 0;
  const isRGB = color.indexOf("rgb") == 0;

  let r, g, b;

  if (isHEX) {
    const hasFullSpec = color.length == 7;
    const m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
    if (m) {
      r = parseInt(m[0] + (hasFullSpec ? "" : m[0]), 16);
      g = parseInt(m[1] + (hasFullSpec ? "" : m[1]), 16);
      b = parseInt(m[2] + (hasFullSpec ? "" : m[2]), 16);
    }
  } else if (isRGB) {
    var m = color.match(/(\d+){3}/g);
    if (m) {
      r = parseInt(m[0], 16);
      g = parseInt(m[1], 16);
      b = parseInt(m[2], 16);
    }
  }

  if (r && g && b) {
    const intensity = (r * 299 + g * 587 + b * 114) / 1000;
    return intensity > 186 ? dark : light;
  }

  return dark;
}
