export const humanizeKey = (input: string): string => {
  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")       // insert space before capital letters
    .replace(/[_-]+/g, ' ')                    // replace underscores/dashes with space
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const dehumanizeKey = (input: string): string =>
  input
    // split existing camelCase too, just in case
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // normalize any non-alphanumeric separator to a space
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map((word, i) =>
      i === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
