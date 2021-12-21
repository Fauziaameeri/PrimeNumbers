function isPrime(num)
{
  let currentNumber = 2;
  if (num <= 1) {
    return false;
  }
  while (currentNumber <= num - 1) {
    if (num % currentNumber == 0) {
      // if the num is divisible by currentNumber, the num is not prime
      return false;
    }
    currentNumber = currentNumber + 1;
  }
  return true;
}

function factors(num) {
  let factorsList = [];
  let currentNumber = 1;
  while (currentNumber <= num) {
    if (num % currentNumber == 0) {
      factorsList.push(currentNumber);
    }
    currentNumber = currentNumber + 1;
  }
  return factorsList;
}

function primesIn(low, high) {
  let primesList = [];
  let currentNumber = low;
  while (currentNumber <= high) {
    if (isPrime(currentNumber)) {
      primesList.push(currentNumber);
    }
    currentNumber = currentNumber + 1;
  }
  return primesList;
}

function howManyPrimes(low, high) {
  let primes = primesIn(low, high);
  return primes.length;
}



