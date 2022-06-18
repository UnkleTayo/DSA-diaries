const nonRecursiveFib = (n) => {
  const baseFib = [0, 1];

  for (let index = 2; index < n; index++) {
    baseFib[index] = baseFib[index - 1] + baseFib[index - 2];
  }

  return baseFib;
};

const res = nonRecursiveFib(10);
