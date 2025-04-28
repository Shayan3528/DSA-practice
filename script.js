const arr = [];

function isPrime() {
  for (let n = 2; n <= 100; n++) {
    let isPrime = true;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      arr.push(n);
    }
  }

  return arr;
}

isPrime();
console.log(arr);
