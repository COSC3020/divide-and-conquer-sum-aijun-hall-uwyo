# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values There are many more algorithms that take
such an approach Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `codejs` Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise For example, the return value for the array `a
= [1,5,-1,4]` is `9`

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures Give the final $\Theta$ complexity

Describe your reasoning and the conclusion you've come to Your reasoning is the
most important part Add your answer to this markdown file

## Aijun Hall

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

- Referenced GeeksforGeeks website on merge sort algorithm here: https://www.geeksforgeeks.org/merge-sort/

- Used Chatgpt to work through and figure out recurison, since I was struggling with figuring out where the splits were needed here:
```
var sum1 = divideAndConquerSum(aslice(0, split_size));
var sum2 = divideAndConquerSum(aslice(split_size, 2 * split_size));
var sum3 = divideAndConquerSum(aslice(2 * split_size));
```

# Answering Runtime Analysis

The runtime of this implemented algorithm is dependent on the fact it uses 3 recursive calls for all cases except the base cases

**Recurrence relation for T(n):**

$$
  T(n) = 
  \begin{cases}
  1 & \text{if } n \le 1,\\
  3T\bigl(\tfrac{n}{3}\bigr) + C & \text{if } n > 1
  \end{cases}
$$

**Solving by substitution:**

$$
  T(n)
  = 3T\Bigl(\frac{n}{3}\Bigr) + C
$$

$$
  T\Bigl(\frac{n}{3}\Bigr)
  = 3T\Bigl(\frac{\frac{n}{3}}{3}\Bigr) + C
$$

$$
= 3T\biggl(\frac{n}{3^2}\biggr) + C
$$

$$
  T\biggl(\frac{n}{3}\biggr)
  = 3T\biggl(\frac{n}{9}\biggr) + C
$$

<hr>

$$
  T(n)
  = 3T\Bigl(\frac{n}{3}\Bigr) + C
$$

$$
  T(n)
  = 3 \Bigl[3T\bigl(\tfrac{n}{9}\bigr) + C \Bigr] + C
$$

$$
  = 9T\biggl(\frac{n}{9}\biggr) + 3C + C
$$

$$
  = 9T\biggl(\frac{n}{9}\biggr) + 4C
$$

<hr>

$$
  T\biggl(\frac{n}{9}\biggr)
  = 3T\biggl(\frac{\tfrac{n}{9}}{3}\biggr) + C
$$

$$
  = 3T\biggl(\frac{n}{27}\biggr) + C
$$

<hr>

$$
  T(n) = 9 \Bigl[3T\bigl(\tfrac{n}{27}\bigr) + C \Bigr] + 4C
$$

$$
  = 27T\bigl(\tfrac{n}{27}\bigr) + 13C
$$

<hr>

$$
\text{1. If } n^{\log_b a} > f(n), \text{ then:}
$$

$$
T(n) \in O\big(n^{\log_b a}\big)
$$

$$
\text{2. If } n^{\log_b a} < f(n), \text{ then:}
$$

$$
T(n) \in O\big(f(n)\big)
$$

$$
\text{3. If } n^{\log_b a} = f(n), \text{ then:}
$$

$$
T(n) \in O\big(n^{\log_b a} \log n\big)
$$
<hr>

$$
  3T\bigl(\tfrac{n}{3}\bigr) + C
$$
- \( a = 3 \)
- \( b = 3 \)
- \( f(n) = c \)

$$
  n^{\log_3 3} = n^1 = n
$$

Since:

$$
  n^{\log_3 3} > f(n) = c
$$

$$
  T(n) \in O(n)
$$


