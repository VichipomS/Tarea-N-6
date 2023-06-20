function fibonacciSequence(limit) {
    var sequence = [0, 1];

    var nextNumber = 0;
  
    while ((nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]) <= limit) {
      sequence.push(nextNumber);

    }
  
    return sequence;

  }
  
  function evenNumbersFibonacci(start, end) {

    var fibonacciSeq = fibonacciSequence(end);

    var evenNumbers = [];
  
    for (var i = 0; i < fibonacciSeq.length; i++) {
      if (fibonacciSeq[i] % 2 === 0 && fibonacciSeq[i] >= start) {
        evenNumbers.push(fibonacciSeq[i]);
      }
    }
  
    return evenNumbers;
  }
  
  function oddNumbersFibonacci(start, end) {

    var fibonacciSeq = fibonacciSequence(end);

    var oddNumbers = [];
  
    for (var i = 0; i < fibonacciSeq.length; i++) {

      if (fibonacciSeq[i] % 2 !== 0 && fibonacciSeq[i] >= start) {
        oddNumbers.push(fibonacciSeq[i]);
      }
    }
  
    return oddNumbers;
  }
  
  console.log("Secuencia de Fibonacci entre 0 y 1000:");

  console.log(fibonacciSequence(1000));
  
  console.log("Números pares de la secuencia de Fibonacci entre 0 y 1000:");

  console.log(evenNumbersFibonacci(0, 1000));
  
  console.log("Números impares de la secuencia de Fibonacci entre 0 y 1000:");
  
  console.log(oddNumbersFibonacci(0, 1000));
  