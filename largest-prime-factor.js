function largestPrimeFactor(number) {
  var divider = 2;
  while (number > divider) {
    if (number % divider === 0) {
      number = number / divider;
      divider = 2;
    } else {
      divider++;
    }
  }
  return number;
}

largestPrimeFactor(13195);