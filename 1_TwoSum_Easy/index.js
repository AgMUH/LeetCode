const twoSum = (arr, target) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) >= 0) return [map.get(arr[i]), i];
    map.set(target - arr[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

// const twoSum = (arr, target) => {
//   let index1 = null;
//   let index2 = null;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i === j) continue;
//       if (arr[i] + arr[j] === target) {
//         index1 = i;
//         index2 = j;
//         break;
//       }
//     }
//     if (index1 !== null && index2 !== null) {
//       break;
//     }
//   }
//   return [index1, index2];
// };
