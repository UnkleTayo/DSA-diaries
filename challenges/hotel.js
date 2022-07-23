// There is a bug in one line of the code. Find it, fix it, and submit.
// Some hotel is introducing a new system for choosing room for arriving tourists. The hotel employee takes visitor's last name and obtains a room number N0 using some function F(name).

// If the room N0 is free then it is chosen.
// If it is already occupied, an unoccupied room N1 is chosen for that visitor such that N0 < N1 and N1 is the smallest possible number.
// If there are no more free rooms with number greater than N0, a free room with the smallest number is chosen.
// F(name) is defined as follows:

// F(s) = (s[0] + s[1] + s[2] + ... + s[length(s) - 1]) mod m.

// Here m is equal to the total number of rooms and s[i] is a code of the ith character of s.

// For a given list of arriving and leaving visitors, determine which visitors will remain in the hotel by the end of the day and return them sorted by the numbers of their rooms in ascending order.

// It is guaranteed that the hotel always has free rooms. All visitors have different names and don't leave the hotel before entering. Rooms have numbers from 0 to m - 1.

function solution(m, operations) {
  var calculateHash = function (name) {
    console.log(name);
    var result = 0;
    for (var i = 0; i < name.length; i++) {
      result += name.charCodeAt(i);
    }
    console.log(result);
    return result;
  };

  var hashMap = [];
  var answer = [];
  for (var i = 0; i < m; i++) {
    hashMap.push(['', -1]);
  }
  for (var i = 0; i < operations.length; i++) {
    var name = operations[i].substr(1);
    var hash = calculateHash(name);
    var pos = hash % m;
    if (operations[i][0] === '+') {
      while (hashMap[pos][1] !== -1) {
        pos = (pos + 1) % m;
      }
      hashMap[pos] = [name, hash];
    } else {
      while (hashMap[pos][-1] !== hash && hashMap[pos][0] !== name) {
        pos = (pos + 1) % m;
      }
      hashMap[pos] = ['', -1];
      console.log(hashMap);
    }
  }
  for (var i = 0; i < m; i++) {
    if (hashMap[i][1] !== -1) {
      answer.push(hashMap[i][0]);
      console.log(hashMap[i][0]);
    }
  }
  return answer;
}

let h = solution(200, ['+Ac', '+Bb', '+Ca', '-Bb', '+Ad']);
h;
// let m = solution(150, [
//   '+AH',
//   '+BG',
//   '+CF',
//   '+DE',
//   '+ED',
//   '+FC',
//   '+GB',
//   '+HA',
//   '+A',
//   '+B',
//   '+C',
// ]);

// m;

// console.log(m);
