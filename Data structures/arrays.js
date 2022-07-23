// Arrays

// It can hold collection of values of different type.
// It is resizable
// They are iterables,can be looped with a for of loop
// They are zero indexed, last item is at length -1


// Array push
// This is a mutating method. It adds a new item to the end of the array.

// Array Unshift
// This is a mutating method. It adds a new item to the beginning of the array.

// Array pop
// This is a mutating method. It removes the last item from the array.

// Array shift
// This is a mutating method. It removes the first item from the array.


// Array methods

// Array slice
// This is a shallow copy of the array. It only copies the reference to the array, not the values.  

// Array.prototype.slice = function(start, end) 
// This will get items in the start index to the end index but not including item in the end index.
// More like from the start index get (end - start)  items.
// If end is not provided, it will get all items from the start index. 


// Array Splice 
// This is a mutating method. It removes items from the array.
// It can also add items to the array.
// It can also replace items in the array.


// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)


// Remove 0 (zero) elements before index 2, and insert "drum"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')


let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let animals2 = animals.slice(2);
animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'fox'];


console.log(animals2);

// BIG O notation  of array methods
// Insert/remove from end - O(1) - constant time
// Insert/remove from beginning - O(n) - linear time - n is the number of items in the array, 
// this is because we have to shift all the items in the array to the right, and add the new item to the beginning.

// Access item in an array - O(1) - constant time
// Searching - O(n) - linear time - n is the number of items in the array, this is because we have to loop through the array to find the item.
// Push/Pop - O(1) - constant time

// shift, unshift/concat/slice/splice - O(n) - linear time - n is the number of items in the array
// forEach, reduce, map, and filter - O(n) - linear time - n is the number of items in the array





