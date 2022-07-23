function celsiusToFahrenheit(arrayOfNumbers) {
  console.log(arrayOfNumbers);
  if (!Array.isArray(arrayOfNumbers)) {
    throw new Error('Please pass an array');
  }

  const convertToF = (celsius) => {
    let cel = celsius;
    console.log(cel);
    const fahrenheit = cel * 1.8 + 32;
    return Math.floor(fahrenheit);
  };

  return arrayOfNumbers.map(convertToF);
}

const numbers = [
  24, 30, 14, -8, 22, 17, -5, 25, 2, 25, 10, 10, 28, 33, 39, 28, 23, -1, 2, -4,
];

console.log(celsiusToFahrenheit(numbers));
