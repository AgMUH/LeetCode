const romanSymbols = {
  IX: 9,
  IV: 4,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s) => {
  for (const key in romanSymbols)
    s = s.replaceAll(key, " " + romanSymbols[key] + " ");
  return s.split(" ").reduce((acc, i) => Number(acc) + Number(i));
};

console.log(romanToInt("VIX"));
