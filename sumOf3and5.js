function multiplesOf3and5(number) {
  let sum = 0;
  let num = number - 1;
  while(num > 0) {
    if(num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
    num--;
  }
  return sum;
}

multiplesOf3and5(1000);