const isPalindrome = (x) => {
  return x < 0
    ? false
    : x.toString() === x.toString().split("").reverse().join("");
};

console.log(isPalindrome(11));
