/*
Given an array of arrays, return all elements in a single array. 
You must use recursion.
Hint: Use Array.isArray(elem) to see if something is an array.
Examples
------------------------------------------------------------------
Input	                                             Output
arrays:
[ [ 10 ], [ 20, 30 ], [ 40 ] ]             	   [ 10, 20, 30, 40 ]
arrays:
[ 1, 2, [ 3 ], 4, [ 5, [ 6 ], 7 ] ]	        [ 1, 2, 3, 4, 5, 6, 7 ]
*/

function flatten(array) {
    var arr = [];
    for(var i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            arr = arr.concat(flatten(array[i]));
        } else {
            arr.push(array[i]);
        }
    }
    return arr;
}