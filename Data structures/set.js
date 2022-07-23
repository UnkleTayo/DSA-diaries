// A set is a data structure that hold unique set of values
// Can contain dffrent data types
// They are dynamically sized

// it doesn't maintain insertion order

// They are iterables i.e you can use for of loop on them

// Difference with Arrays 

// Array can contain duplicate while set can not
// Searchig and deleteing is faster than arrays
// insertion order is maintained in array but not in set


// Creating a set 
// the set constructor is used 

const set = new Set([2, 4, '3', '7', 2, 2]); //It optionally accepts an array or another set as an argument
set.add(20)
set.add(30)

// Checking if a value is present in a set
let has =set.has(20) // true
// Removing a value from a set

set.delete(20)

// size of a set, number of values in a set
set.size // 3

// Delete all value in a set 
set.clear()
for(let value of set) {
    console.log(value);
}