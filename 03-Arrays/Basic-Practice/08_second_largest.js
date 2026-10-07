// ========================================
// Problem: Find Second Largest Element
// ========================================
// Given an array, find the second largest element
// without sorting. Return -1 if it doesn't exist.
//
// Example:
//   Input:  [10, 5, 8, 20]
//   Output: 10
//
// Difficulty: Easy
// Time Complexity: O(n) — single pass
// Space Complexity: O(1)
//
// Note: A common mistake is to just find max and then
//       find max again excluding it. That works but
//       needs two passes. This does it in one.
// ========================================

function secondLargest(arr) {
  if (arr.length < 2) return -1;

  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }

  return second === -Infinity ? -1 : second;
}

// --- Test ---
console.log(secondLargest([10, 5, 8, 20]));    // 10
console.log(secondLargest([5, 5, 5]));          // -1 (all same)
console.log(secondLargest([1]));                // -1 (only one element)
console.log(secondLargest([3, 1]));             // 1
