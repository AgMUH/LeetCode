const leastBricks = (wall) => {
  let map = {};
  let maxValue = 0;
  for (let row = 0; row < wall.length; row++) {
    let rowValue = 0;
    for (let brick = 0; brick < wall[row].length - 1; brick++) {
      rowValue += wall[row][brick];
      map[rowValue] = map[rowValue] ? map[rowValue] + 1 : 1;
      maxValue = Math.max(map[rowValue], maxValue);
    }
  }
  return wall.length - maxValue;
};

const wall = [
  [4, 5, 1],
  [2, 1, 2, 5],
  [1, 2, 1, 2, 4],
];

// const wall = [
//   [1, 2, 2, 1],
//   [3, 1, 2],
//   [1, 3, 2],
//   [2, 4],
//   [3, 1, 2],
//   [1, 3, 1, 1],
// ];

console.log(leastBricks(wall));
