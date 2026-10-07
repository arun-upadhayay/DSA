// ========================================
// Problem: Check if Array is Sorted
// ========================================
// Given an array, check whether it is sorted in
// non-decreasing order (ascending).
//
// Example:
//   Input:  [1, 2, 3, 4, 5]  → true
//   Input:  [1, 3, 2, 4, 5]  → false
//
// Difficulty: Easy
// Time Complexity: O(n)
// Space Complexity: O(1)
// ========================================

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

// --- Test ---
console.log(isSorted([1, 2, 3, 4, 5]));    // true
console.log(isSorted([1, 3, 2, 4, 5]));    // false
console.log(isSorted([5, 5, 5]));           // true (equal is ok)
console.log(isSorted([1]));                 // true
console.log(isSorted([]));                  // true
