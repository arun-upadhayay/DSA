// ========================================
// Problem: Find the Missing Number
// ========================================
// Given an array containing n distinct numbers from
// the range [0, n], find the one number that is missing.
//
// Example:
//   Input:  [3, 0, 1]
//   Output: 2
//
// Source: LeetCode #268
// Link: https://leetcode.com/problems/missing-number/
// Difficulty: Easy
// Pattern: Math (Sum Formula)
// Time Complexity: O(n)
// Space Complexity: O(1)
//
// Key Insight: Sum of 0 to n = n*(n+1)/2
//              Missing = expected sum - actual sum
// ========================================

function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

// --- Test ---
console.log(missingNumber([3, 0, 1]));          // 2
console.log(missingNumber([0, 1]));              // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
console.log(missingNumber([0]));                  // 1
