// ========================================
// Problem: Reverse an Array
// ========================================
// Given an array, reverse it in-place.
//
// Example:
//   Input:  [1, 2, 3, 4, 5]
//   Output: [5, 4, 3, 2, 1]
//
// Difficulty: Easy
// Pattern: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1) — in-place swap
// ========================================

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

// --- Test ---
console.log(reverseArray([1, 2, 3, 4, 5]));  // [5, 4, 3, 2, 1]
console.log(reverseArray([10, 20]));          // [20, 10]
console.log(reverseArray([1]));               // [1]
console.log(reverseArray([]));                // []
