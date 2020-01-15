function fiboEvenSum(n) {
  var sum = 0;
  var first = 0;
  var second = 1;
  var next;
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      next = i;
    }
    else {
      next = first + second;
      first = second;
      second = next;
    }
    if (next % 2 === 0) {
      sum = sum + next;
    }
  }
  return sum;
}


fiboEvenSum(4000000);
