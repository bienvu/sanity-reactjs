export default function resolveProductionUrl(document) {
  return `https://sanitydemo.sanity.studio/preview/${document._id}`
}
