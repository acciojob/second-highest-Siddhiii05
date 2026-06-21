//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let highest = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > highest) {
      second = highest;
      highest = num;
    } else if (num > second && num !== highest) {
      second = num;
    }
  }

  return second;
}