// Map is an ordered collection of key value pairs
// Both key and value can be of any data type
// Map is iterable i.e you can use for of loop on it

// Differences between Map and Objects 
// Objects are unordered while Maps are ordered
// Maps are iterable i.e you can use for of loop on them
// Maps are dynamically sized
// An oject has a prototype and ,ay contain few default key value pairs
// Number of items in a map is readily available 

// Maps are restricted to storing data, you can't add functions to a map


// creating a map
// the map constructor is used,
// it optionally accepts an array s of length 2
// First item in each array array is the key and second array is the value
// const map = new Map([["key", "value"], ["a", 20]]);
const map = new Map([["key", "value"], ["a", 20]]);


// adding a key value pair to a map
map.set("b", 30);

// checking if a key is present in a map
let has = map.has("a"); // true
console.log(has)


// Clearing a map
map.clear();
for (let [key, value] of map) {
    console.log(key, value);
}