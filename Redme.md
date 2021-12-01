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