/*
Intersection
Write a function to get the intersection of two arrays
https://en.wikipedia.org/wiki/Intersection_(set_theory)
The function should accept two arrays and return a new array with the elements
which are common to both arrays.
Elements should be ordered according to the order in which they occur in the
first array.
Example:
intersection([1, 2, 3, 4], [1, 2, 3]) -> [2, 3]
*/

'use strict';

function intersection (array_1, array_2) {
  if (array_1.length > array_2.length) {
    return array_1.filter(function (a) {
      return array_2.indexOf(a) > -1;
    });
  } else {
    return array_1.filter(function (a) {
      return array_2.indexOf(a) > -1;
    });
  }

  // My second try, this method worked using nested loops
  // const final_array = [];
  // for (let i = 0; i < array_1.length; i++) {
  //   for (let j = 0; j < array_2.length; j++) {
  //     if (array_1[i] === array_2[j]) {
  //       final_array.push(array_1[i]);
  //     }
  //   }
  // }
    
  // return final_array;

  // My first try, this way didn't work..
  // const final_array = [];
  // let length_one;
  // let length_two;

  // if (array_1.length > array_2.length) {
  //   length_one = array_1.length;
  //   for (let i = 0; i < length_one; i++) {
  //     if (array_1[i] === array_2[i]) {
  //       final_array.push(array_1[i]);
  //     }
  //   }
  // } else {
  //   length_two = array_2.length;
  //   for (let i = 0; i < length_two; i++) {
  //     if (array_1[i] === array_2[i]) {
  //       final_array.push(array_1[i]);
  //     }
  //   }
  //   return final_array;
  // }
}

const assert = require('assert');

assert.deepEqual(intersection([1, 2, 3, 4], [2, 3, 7, 8]), [2, 3]);
assert.deepEqual(intersection(['a', 'b', 'c', 'd'], ['c', 'a', 't']), ['a', 'c']);
assert.deepEqual(intersection([undefined, null, NaN, 0, ''], [null]), [null]);

process.stdout.write("If this line runs, you've solved the kata!");
process.exit(0);