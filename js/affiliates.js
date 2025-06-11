function affiliateLink(ingredient) {
  const encoded = encodeURIComponent(ingredient);
  const amazon = `https://www.amazon.co.jp/s?k=${encoded}&tag=YOUR_AMAZON_ID`;
  const rakuten = `https://hb.afl.rakuten.co.jp/hgc/${encoded}`;
  return `<a href="${amazon}" target="_blank">Amazon</a> | <a href="${rakuten}" target="_blank">楽天</a>`;
}
