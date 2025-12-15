export default function cleanSet(set, startString) {
  if (!startString || !startString.length || !(set instanceof Set)) {
    return '';
  }

  const values = [];

  for (const element of set) {
    if (element && element.startsWith(startString)) {
      values.push(element.slice(startString.length));
    }
  }

  return values.length ? `${values.join('-')}-` : '';
}
