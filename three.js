//Display Fibonacci Sequence Using Recursion

// A fibonacci sequence is written as:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// The Fibonacci sequence is the integer 
// sequence where the first two terms are 0 and 1.
//  After that, the next term is defined 
//  as the sum of the previous two terms. Hence,
// the nth term is the sum of (n-1)th term and (n-2)th term.

function fib(num){
  if(num < 2){
    return num;
  }
  return fib(num-1) + fib(num-2)
}
console.log(fib(5))

let number=5;
for(let i=0;i<number;i++){
    console.log(fib(i))
}