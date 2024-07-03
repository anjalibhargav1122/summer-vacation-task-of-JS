const num = 41;

function isprime(num) {
  if (num < 2) {
    return false;
  }
  if (num == 2 || num == 3) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

if (isprime(num)) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is not a prime number`);
}
