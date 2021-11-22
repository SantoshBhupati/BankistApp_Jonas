1)Array.prototype.slice()
->
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

let arr = ['a','b','c','d','e'];
console.log(arr.slice(2));
 ['c', 'd', 'e']

console.log(arr.slice(-2));
 ['d', 'e']

console.log(arr.slice());
 ['a', 'b', 'c', 'd', 'e']

2)Array.prototype.splice()
->
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Splice method change into original array

console.log(arr.splice(2));
 ['c', 'd', 'e'];


3)Array.prototype.reverse()
->
The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.Reverse method changes in the  original array

arr=[5,4,3,2,1];
console.log(arr.reverse());
 [1, 2, 3, 4, 5]

4)Array.prototype.concat()
->
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

arr=[5,4,3,2,1]; let arr2=[12,56,78,90];
const something = arr.concat(arr2);
console.log(something);
[1, 2, 3, 4, 5, 12, 56, 78, 90]



5)Array.prototype.join()
->
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.


something= [1, 2, 3, 4, 5, 12, 56, 78, 90]
console.log(something.join('-'));
1-2-3-4-5-12-56-78-90


6)Array.prototype.at()
->
The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

console.log(arr.at(0));
1

7)Array.prototype.entries()
->
The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries())
  console.log(index, element);

// 0 'a'
// 1 'b'
// 2 'c'

8)Array.prototype.forEach()
->
forEach() calls a provided callbackFn function once for each element in an array in ascending index order. It is not invoked for index properties that have been deleted or are uninitialized. (For sparse arrays, see example below.)

callbackFn is invoked with three arguments:

the value of the element
the index of the element
the Array object being traversed

movements.forEach((mov,i,arr)=>{
  if(mov >0 ){
    console.log(`Movements ${i} : You Deposited ${mov}`);
  }
  else{
    console.log(`Movements ${i} : You Withdrew ${Math.abs(mov)}`);
  }
});