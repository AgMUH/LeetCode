const isPalindrome = (s) => {
  const p = /[^a-zA-Z0-9]+/g;
  const updatedStr = s.replace(p, "").toLowerCase();
  return updatedStr === updatedStr.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
