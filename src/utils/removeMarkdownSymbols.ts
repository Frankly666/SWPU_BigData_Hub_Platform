export function removeMarkdownSymbols(markdownText: string): string {
  return markdownText.replace(/[*_{}[\]()#+\-.!]/g, "");
}
