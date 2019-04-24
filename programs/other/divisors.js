/*
 find divisors of number


 a divisor also called as factors of `n`, is an integer `m` 
 that may be mulitiplied by some integer to produce `n`.

 Factors or divisors are the numbers which can divide the given number.
 Factors are what we can multiply to get the number

 */

/*
 This is the brute force approach.
 Time complexity of O(n) 
*/
function findFactors(num) {
  const list = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      list.push(i);
    }
  }
  return list;
}


/*
all the divisors are present in pairs.
however have to careful if there are two equal divisors as in case of (10, 10). 
In such case we’d add only one of them.
Time Complexity : O(sqrt(n))
*/
function findDivisors(num) {
  const list = [];
  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      const j = num / i;
      if (j === i) {
        list.push(i);
      } else {
        list.push(i, j);
      }
    }
  }
  return list;
}

console.log(findFactors(10)); // => [ 1, 2, 5, 10 ]
console.log(findFactors(100)); // => [ 1, 2, 4, 5, 10, 20, 25, 50, 100 ]

console.log(findDivisors(10)); // => [ 1, 10, 2, 5 ]
console.log(findDivisors(100));// => [ 1, 100, 2, 50, 4, 25, 5, 20, 10 ]

