// ========================================
// Problem: Left Rotate Array by K Places
// ========================================
// Given an array, rotate it to the left by K positions.
//
// Example:
//   Input:  [1, 2, 3, 4, 5], k = 2
//   Output: [3, 4, 5, 1, 2]
//
// Difficulty: Easy
// Pattern: Reversal Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1) — in-place using reverse
// ========================================

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function leftRotate(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;

  k = k % n; // handle k > array length

  // Step 1: Reverse first k elements
  // Step 2: Reverse remaining elements
  // Step 3: Reverse the whole array
  // [1,2 | 3,4,5] → [2,1 | 5,4,3] → [3,4,5,1,2]

  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);

  return arr;
}

// --- Test ---
console.log(leftRotate([1, 2, 3, 4, 5], 2));  // [3, 4, 5, 1, 2]
console.log(leftRotate([1, 2, 3, 4, 5], 0));  // [1, 2, 3, 4, 5]
console.log(leftRotate([1, 2, 3, 4, 5], 5));  // [1, 2, 3, 4, 5]
console.log(leftRotate([1, 2, 3, 4, 5], 7));  // [3, 4, 5, 1, 2] (7%5 = 2)
