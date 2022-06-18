// Problem

// Given a + ve integer 'n' detemine if the number is poer of two or not

// An intger is a power of two if there exist x such that n === 2

// Pseudo code

// assume  n === 8
// divide n / 2 and repeat for each step
// if each step is divisible by two and we end up with 1 it is a power of two

function isPowerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;
}

console.log(isPowerOfTwo(69));
