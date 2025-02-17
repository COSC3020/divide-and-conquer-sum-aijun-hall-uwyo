# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Aijun Hall

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

- Referenced GeeksforGeeks website on merge sort algorithm here: https://www.geeksforgeeks.org/merge-sort/.

- Used Chatgpt to work through and figure out recurison, since I was struggling with figuring out where the splits were needed here:
```
var sum1 = divideAndConquerSum(a.slice(0, split_size));
var sum2 = divideAndConquerSum(a.slice(split_size, 2 * split_size));
var sum3 = divideAndConquerSum(a.slice(2 * split_size));
```

# Answering Runtime Analysis

The runtime of this implemented algorithm is dependent on the fact it uses 3 recursive calls for all cases except the base case. First looking at base cases, we have a constant runtime of O(1) because summing numbers is constant work.

If we ignore the slicing recursion then we have T(n) = 3 * T(n / 3) + O(1) = Θ(n)

However with the slicing recursion, we must consider the overhead of Javascript introducing additional copying at each recursion level. Slicing is Θ(n) per level, and Θ(log(n)) for the depth of the array being sliced. This is because we are copying K elements at each level of recursion

T(n) = 3 * T (n / 3) + O(n) => Θ(n * log(n))
