/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
	var mid=Math.floor(array.length/2);
	if(target===array[mid]){
		return mid 
	}
	if(target<array[mid]){
		for(var i=0;i<mid;i++){
			if(array[i]===target){
				return i
			}
		}
	}
	if(target>array[mid]){
		for(var i=mid+1;i<array.length;i++){
			if(target===array[i]){
				return i
			}
		}
	}
  
};

