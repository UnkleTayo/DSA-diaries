// function magicalWell(a, b, n) {
//   let total = 0;
//   for (let i = 0; i < n; i++) {
//     total = a * b + total;
//     a++;
//     b++;
//   }

//   return total;
// }

// let a = magicalWell(2, 4, 5);

// a;

// function mWell2(a, b, n) {
//   let total = 0;

//   while (total < n) {
//     total = a * b + total;
//     console.log(a);
//     a++;
//     b++;
//     console.log(total);
//   }

//   return total;
// }

// let b = mWell2(2, 4, 5);
// b;

// let message = 'Happy Birthday @';

// // unicode point of character at index 1
// let codePoint1 = message.codePointAt(1);

// console.log("Unicode Code Point of 'a' is " + codePoint1);

function sayHi(fn, cb) {
  console.log(`ji ${fn}`);
  if (typeof cb == 'function') {
    cb();
  }
}

function sayBye(fn, cb) {
  console.log(`ji ${fn}`);
  // if (typeof cb == 'function') {
  cb();
  // }
}

function prtMsg(fn, ln, cb) {
  let h = `ji ${fn} ${ln}`;
  if (typeof cb == 'function') {
    cb(h);
  }
}

prtMsg('john', 'doe', (x) => console.log(x));
console.log(prtMsg('john', 'snow', sayHi));
console.log(prtMsg('john', 'snow', sayBye));
