function divideAndConquerSum(a) {
    // Base cases, when not divisible into 3 parts
    if (a.length === 0) {
      return 0;
    }
    if (a.length === 1) {
      return a[0];
    }

    // Helper summing function
    function sumArray(a) {
      let total = 0;
      for (let i = 0; i < a.length; i++) {
        total += a[i];
      }
      return total;
    }

    // Determine the splitting size
    var split_size = Math.floor(a.length / 3);

    // If the array is too small to split into 3 parts meaningfully
    // (e.g., length = 2), just sum directly with helper func.
    if (split_size === 0) {
      return sumArray(a);
    }

    // Recursive calls on each third of the array
    // Splitting into 3 sub-arrays here as requested
    var sum1 = divideAndConquerSum(a.slice(0, split_size));
    var sum2 = divideAndConquerSum(a.slice(split_size, 2 * split_size));
    var sum3 = divideAndConquerSum(a.slice(2 * split_size));

    // Combine (merge) the results of the three sums
    return sumArray([sum1, sum2, sum3]);
  }