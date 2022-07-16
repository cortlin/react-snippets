function fib(n) {
  let fibnums = [];

  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      fibnums.push(1);
    } else {
      const fib1 = fibnums[fibnums.length - 1];
      const fib2 = fibnums[fibnums.length - 2];
      const newnum = fib1 + fib2;
      fibnums.push(newnum);
    }
  }

  return fibnums[fibnums.length - 1];
}

console.log(fib(8));

// const blah = [1,1,2,3,5,8,13,21]

// (fn-1) + (fn-2)
