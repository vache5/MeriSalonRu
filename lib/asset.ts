/** Bump when static images in /public are replaced to bust browser cache. */
export const ASSET_VERSION = "20260518";

export function assetSrc(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}v=${ASSET_VERSION}`;
}
