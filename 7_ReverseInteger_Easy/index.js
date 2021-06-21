const reverse = (x) => {
  const numb = Math.abs(x).toString().split("").reverse().join("");
  return numb > 2147483648 ? 0 : numb * (x < 0 ? -1 : 1);
};

console.log(reverse(-120));
