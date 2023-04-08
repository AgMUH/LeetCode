/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  if (!properties.length) return 0;
  let arr = properties.sort((a, b) => {
    return b[0] - a[0] || a[1] - b[1];
  });
  let count = 0;
  let second = arr[0][1];
  for (let index = 1; index < arr.length; index++) {
    const elementSecond = arr[index][1];
    if (second > elementSecond) count++;
    else {
      second = elementSecond;
    }
  }
  return count;
};
