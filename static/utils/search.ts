
function filterByStringQuery<T>(list: Array<T>, query: string): Array<T> {
  const isMatch = (name: string): boolean => name.toLocaleLowerCase().indexOf(query) !== -1;

  return list;
}