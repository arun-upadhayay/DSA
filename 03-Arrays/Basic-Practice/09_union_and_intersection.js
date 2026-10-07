// ========================================
// Problem: Union and Intersection of Two Sorted Arrays
// ========================================
// Given two sorted arrays, find their union (all unique
// elements from both) and intersection (common elements).
//
// Example:
//   arr1 = [1, 2, 3, 4, 5]
//   arr2 = [3, 4, 5, 6, 7]
//   Union:        [1, 2, 3, 4, 5, 6, 7]
//   Intersection: [3, 4, 5]
//
// Difficulty: Easy
// Pattern: Two Pointers (since arrays are sorted)
// Time Complexity: O(n + m)
// Space Complexity: O(n + m) for the result
// ========================================

function union(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    // skip duplicates within each array
    if (i > 0 && arr1[i] === arr1[i - 1]) { i++; continue; }
    if (j > 0 && arr2[j] === arr2[j - 1]) { j++; continue; }

    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j++]);
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    if (i === 0 || arr1[i] !== arr1[i - 1]) result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    if (j === 0 || arr2[j] !== arr2[j - 1]) result.push(arr2[j]);
    j++;
  }

  return result;
}

function intersection(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      // avoid duplicate entries in result
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
      j++;
    }
  }

  return result;
}

// --- Test ---
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];
console.log("Union:", union(a, b));              // [1, 2, 3, 4, 5, 6, 7]
console.log("Intersection:", intersection(a, b)); // [3, 4, 5]

const c = [1, 1, 2, 3, 3];
const d = [2, 2, 3, 3, 4];
console.log("Union:", union(c, d));              // [1, 2, 3, 4]
console.log("Intersection:", intersection(c, d)); // [2, 3]
