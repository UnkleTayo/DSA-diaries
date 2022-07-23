// Prime Number
// A prime number is a natural number greater than 1 that is not
// a product of two smaller numbers

// Big 0 - O(n)
function isPrime(n) {
  if (n < 2) return false;

  for (let index = 2; index < n; index++) {
    if (n % index === 0) {
      return false;
    }
  }

  return true;
}

function optimizedIsPrime(n) {
  if (n < 2) return false;

  for (let index = 2; index < Math.sqrt(n); index++) {
    if (n % index === 0) {
      return false;
    }
  }

  return true;
}
// if n = a * b one of the factors is less than or equal to sqaure roote of  n

console.log(optimizedIsPrime(1));
