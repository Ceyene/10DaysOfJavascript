// Objective
// Today, we're practicing bitwise operations. Check the attached tutorial for more details.
// Task
// We define S to be a sequence of distinct sequential integers from 1 to n; in other words, S= {1, 2, 3, ..., n}. We want to know the maximum bitwise AND value of any two integers, a and b (where a < b), in sequence S that is also less than a given integer, k.
// Complete the function in the editor so that given n and k, it returns the maximum a & b < k.
// Note: The & symbol represents the bitwise AND operator.

function getMaxLessThanK(n, k) {
  let max = 0;

  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
      let ab = a & b;
      if (ab < k && ab > max) {
        max = ab;
      }
    }
  }
  return max;
}
