export const stringToHTML = (string: string, type: DOMParserSupportedType = 'text/html') => {
  const parser = new DOMParser(),
    doc = parser.parseFromString(string, type);
  return doc.body;

}