// ========================================
// Problem: Move Zeroes to End
// ========================================
// Given an array, move all zeroes to the end while
// maintaining the relative order of non-zero elements.
//
// Example:
//   Input:  [0, 1, 0, 3, 12]
//   Output: [1, 3, 12, 0, 0]
//
// Source: LeetCode #283
// Link: https://leetcode.com/problems/move-zeroes/
// Difficulty: Easy
// Pattern: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
// ========================================

function moveZeroes(arr) {
  let insertPos = 0; // where the next non-zero should go

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[insertPos], arr[i]] = [arr[i], arr[insertPos]];
      insertPos++;
    }
  }

  return arr;
}

// --- Test ---
console.log(moveZeroes([0, 1, 0, 3, 12]));  // [1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 0, 1]));       // [1, 0, 0, 0]
console.log(moveZeroes([1, 2, 3]));           // [1, 2, 3]
console.log(moveZeroes([0]));                 // [0]
