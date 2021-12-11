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

9)Array.prototype.map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

Parameters
callbackFn
Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.

The callbackFn function accepts the following arguments:

element
The current element being processed in the array.

indexOptional
The index of the current element being processed in the array.

arrayOptional
The array map was called upon.

thisArgOptional
Value to use as this when executing callbackFn.

Return value
A new array with each element being the result of the callback function.

10)array.split() method

The split() method splits a string into an array of substrings.

The split() method returns the new array.

The split() method does not change the original string.

If (" ") is used as separator, the string is split between words.

let text = "How are you doing today?";
const myArray = text.split(" ");

 result = ["how","are","you","doing" ,"today"]



11)Array.prototype.filter()
->
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


12)Array.prototype.reduce()


The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise array element 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

Example
 const balance = movements.reduce((acc,mov) => acc + mov ,0);


 13)Array.prototype.find()
 ->
The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
output = 12


14)Array.prototype.findIndex()
->
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3


15)Array.prototype.includes()
->
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

16)Array.prototype.some()
->
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true


17)Array.prototype.every()
->
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(Ele => ele >0));
// expected output: true



18)Array.prototype.sort()
->
The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.


19)Array.prototype.fill()
The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.


const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]


20)Array.from()
->
The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.


21)Array.prototype.flat()
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

22)Array.prototype.flatMap()
The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.


//OPTIONAL CHAINING
Optional chaining (?.)
->
The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

Optional chaining cannot be used on a non-declared root object, but can be used with an undefined root object.


HTMLElement.blur()
The HTMLElement.blur() method removes keyboard focus from the current element.

//DOM APPLICAION
Element.insertAdjacentHTML()
The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements inside that element. This avoids the extra step of serialization, making it much faster than direct innerHTML manipulation.

Syntax
element.insertAdjacentHTML(position, text);
Copy to Clipboard
Parameters
position
A DOMString representing the position relative to the element; must be one of the following strings:

'beforebegin': Before the element itself.
'afterbegin': Just inside the element, before its first child.
'beforeend': Just inside the element, after its last child.
'afterend': After the element itself.
text
The string to be parsed as HTML or XML and inserted into the tree.

Visualization of position names
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->

HTMLElement.blur()
->
The HTMLElement.blur() method removes keyboard focus from the current element.