# Arrays

## What is an Array?

An array is a collection of elements stored at **contiguous memory locations**. Each element can be accessed directly using its **index** (position number), starting from `0`.

Think of it like a row of lockers — each locker has a number, and you can go directly to locker #5 without opening lockers #1 through #4.

```
Index:   0     1     2     3     4
       [ 10 ][ 20 ][ 30 ][ 40 ][ 50 ]
```

**Why arrays are fast for access:** Since elements sit next to each other in memory and each takes the same space, the computer calculates the exact memory address using `base_address + (index × element_size)` — no searching needed.

---

## Types

| Type | Description | Example |
|------|-------------|---------|
| **1D Array** | A simple list of elements | `[1, 2, 3, 4, 5]` |
| **2D Array** | Array of arrays (matrix/grid) | `[[1,2], [3,4], [5,6]]` |
| **Dynamic Array** | Grows/shrinks automatically (JS arrays are this) | `arr.push(6)` extends it |
| **Sparse Array** | Has gaps/empty slots | `[1, , , 4]` |

> In JavaScript, arrays are **dynamic** by default — you don't need to declare a fixed size.

---

## Key Operations & Complexity

| Operation | What it Does | Time | Space |
|-----------|-------------|------|-------|
| **Access** `arr[i]` | Get element at index | O(1) | O(1) |
| **Search** | Find if element exists | O(n) | O(1) |
| **Push** `arr.push(x)` | Add to end | O(1)* | O(1) |
| **Pop** `arr.pop()` | Remove from end | O(1) | O(1) |
| **Unshift** `arr.unshift(x)` | Add to beginning | O(n) | O(1) |
| **Shift** `arr.shift()` | Remove from beginning | O(n) | O(1) |
| **Insert** at middle | Add at any position | O(n) | O(1) |
| **Delete** from middle | Remove from any position | O(n) | O(1) |
| **Slice** `arr.slice(a,b)` | Copy a portion | O(k) | O(k) |
| **Sort** `arr.sort()` | Sort elements | O(n log n) | O(log n) |

> *O(1) amortized — occasionally O(n) when the internal buffer resizes, but on average it's O(1).

**Why is push O(1) but unshift O(n)?**
`push` adds at the end — nothing moves. `unshift` adds at the beginning — every existing element must shift one position right.

---

## Common JavaScript Array Methods

```javascript
// Creating
const arr = [10, 20, 30, 40, 50];
const empty = new Array(5).fill(0);    // [0, 0, 0, 0, 0]

// Adding & Removing
arr.push(60);          // End: [10,20,30,40,50,60]
arr.pop();             // End: [10,20,30,40,50]
arr.unshift(5);        // Start: [5,10,20,30,40,50]
arr.shift();           // Start: [10,20,30,40,50]
arr.splice(2, 1);      // Remove 1 element at index 2: [10,20,40,50]
arr.splice(2, 0, 30);  // Insert 30 at index 2: [10,20,30,40,50]

// Searching
arr.indexOf(30);       // 2 (first occurrence, -1 if not found)
arr.includes(30);      // true
arr.find(x => x > 25); // 30 (first match)
arr.findIndex(x => x > 25); // 2

// Transforming
arr.map(x => x * 2);        // [20,40,60,80,100] — new array
arr.filter(x => x > 25);    // [30,40,50] — new array
arr.reduce((sum, x) => sum + x, 0);  // 150

// Iterating
arr.forEach((val, idx) => console.log(idx, val));
for (let i = 0; i < arr.length; i++) { }    // classic
for (const val of arr) { }                   // for...of

// Utility
arr.reverse();         // Reverses in-place
arr.sort((a,b) => a - b);  // Sort ascending (MUST pass comparator for numbers)
arr.slice(1, 3);       // [20, 30] — does NOT modify original
arr.concat([60, 70]);  // [10,20,30,40,50,60,70] — new array
Array.isArray(arr);    // true
```

---

## Common Patterns in Array Problems

| Pattern | When to Use | Example Problems |
|---------|------------|-----------------|
| **Two Pointers** | Sorted array, pair finding, palindrome checks | Two Sum (sorted), Container With Most Water |
| **Sliding Window** | Subarray/substring of fixed or variable size | Max Sum Subarray, Longest Substring |
| **Prefix Sum** | Range sum queries, subarray sums | Subarray Sum Equals K |
| **Hash Map** | Frequency counting, finding complements | Two Sum, Contains Duplicate |
| **Sorting First** | When order helps simplify the logic | Merge Intervals, 3Sum |
| **Kadane's Algorithm** | Maximum subarray sum | Maximum Subarray |
| **Binary Search** | Sorted array, find target/boundary | Search Insert Position |

---

## Key Things to Remember

- JavaScript `.sort()` converts to strings by default — always pass `(a, b) => a - b` for numbers
- `.splice()` modifies the original array, `.slice()` does not
- Array index starts at `0`, last element is at `arr.length - 1`
- Accessing an out-of-bounds index returns `undefined` (no error thrown)
- `===` does not work for comparing arrays — compare element by element or use `JSON.stringify`

---

## Follow-Up Questions (Test Your Understanding)

1. Why is accessing `arr[1000]` just as fast as `arr[0]`?
2. What happens internally when you call `arr.unshift(5)` on a 1000-element array?
3. Why does `[10, 9, 2, 100].sort()` give `[10, 100, 2, 9]` instead of `[2, 9, 10, 100]`?
4. What is the difference between `arr.slice(1, 3)` and `arr.splice(1, 2)`?
5. When would you choose a Hash Map over Two Pointers for an array problem?

---

## Learn More

- [Arrays — JavaScript.info](https://javascript.info/array) — Deep dive into JS arrays with examples
- [Array Methods — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) — Complete method reference
- [Arrays — Programiz DSA](https://www.programiz.com/dsa/array) — Data structure perspective with visuals
- [Array Patterns — NeetCode](https://neetcode.io/roadmap) — Pattern-based problem roadmap

---

## Progress

| Phase | Status |
|-------|--------|
| Theory | :white_check_mark: |
| Basic Practice | :black_square_button: |
| Important Problems | :black_square_button: |
| Company Problems | :black_square_button: |
