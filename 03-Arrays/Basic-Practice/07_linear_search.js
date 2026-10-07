// ========================================
// Problem: Linear Search
// ========================================
// Given an array and a target value, return the index
// of the target. Return -1 if not found.
//
// Example:
//   Input:  [4, 7, 2, 9, 1], target = 9
//   Output: 3
//
// Difficulty: Easy
// Time Complexity: O(n)
// Space Complexity: O(1)
// ========================================

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// --- Test ---
console.log(linearSearch([4, 7, 2, 9, 1], 9));   // 3
console.log(linearSearch([4, 7, 2, 9, 1], 5));   // -1
console.log(linearSearch([10], 10));              // 0
console.log(linearSearch([], 1));                 // -1
