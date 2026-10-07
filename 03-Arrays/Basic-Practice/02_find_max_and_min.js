// ========================================
// Problem: Find Maximum and Minimum Element
// ========================================
// Given an array, find the largest and smallest element.
//
// Example:
//   Input:  [3, 1, 8, 5, 2]
//   Output: { max: 8, min: 1 }
//
// Difficulty: Easy
// Time Complexity: O(n) — single pass
// Space Complexity: O(1)
// ========================================

function findMaxMin(arr) {
  if (arr.length === 0) return null;

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return { max, min };
}

// --- Test ---
console.log(findMaxMin([3, 1, 8, 5, 2]));    // { max: 8, min: 1 }
console.log(findMaxMin([10]));                // { max: 10, min: 10 }
console.log(findMaxMin([-5, -1, -9, -3]));    // { max: -1, min: -9 }
console.log(findMaxMin([]));                  // null
