function factorial(n) {
  let result = 1;

  for (let index = 2; index < n; index++) {
    result = result * index;
  }

  return result;
}

const res = factorial(4);
