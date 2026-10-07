// ========================================
// Problem: Remove Duplicates from Sorted Array
// ========================================
// Given a sorted array, remove duplicates in-place
// and return the count of unique elements.
//
// Example:
//   Input:  [1, 1, 2, 3, 3, 4]
//   Output: 4 (array becomes [1, 2, 3, 4, ...])
//
// Source: LeetCode #26
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Difficulty: Easy
// Pattern: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
// ========================================

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let i = 0; // slow pointer — marks the last unique position

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

// --- Test ---
const arr1 = [1, 1, 2, 3, 3, 4];
console.log(removeDuplicates(arr1), arr1); // 4, [1, 2, 3, 4, ...]

const arr2 = [1, 1, 1, 1];
console.log(removeDuplicates(arr2), arr2); // 1, [1, ...]

const arr3 = [1, 2, 3];
console.log(removeDuplicates(arr3), arr3); // 3, [1, 2, 3]
