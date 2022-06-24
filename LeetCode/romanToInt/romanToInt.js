const romanToInt = (s) => {
  const ROMAN = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let result = 0;

  for (let i = 0; i < 2; i += 1) {
    const current = ROMAN.get(s[i]);
    const next = ROMAN.get(s[i + 1]);

    if (current < next) {
      result = result + next - current;
      i += 1;
    } else {
      result += current;
    }
  }

  return result;
};

let s = 'MCMXCIV';

romanToInt(s);
