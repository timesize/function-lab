## Solutions

### `maxOrMin(num1, num2, max)`

```js
// maxOrMin solution

function maxOrMin(num1, num2, max) {
    //sort the numbers
    var sorted = [num1, num2].sort(function(a, b){
      return a - b;
    });
    if(max) {
        //if max is true return the greater number
        return sorted[1];
    } else {
        //otherwise return the lesser number
        return sorted[0];
    }
}
```

### `sillySum(arr)`

```js
// sillySum solution

var sillySum = function(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i += 1) {
    total += arr[i] * i;
  }
  return total;
};

var myArray = [1, 2, 3, 4];
console.log(sillySum(myArray));

var anotherArray = [20, 36, 79, 13, 57];
console.log(sillySum(anotherArray));
```

### `numSquare(max)`

```js
// numSquare solution

var numSquare = function(max) {
  var squaresArr = [];

  for (var i = 0; i <= max; i += 1) {
    if (Math.sqrt(i) % 1 === 0) {
      squaresArr.push(i);
    }
  }
  return squaresArr;
};

console.log(numSquare(100));


// alternate solution

var numSquare = function(max) {
  var squaresArr = [];

  for (i = 1; i * i <= max; i += 1) {
    squaresArr.push(i * i);
  }
  return squaresArr;
};
```

### `isPrime(num)`

```js
// isPrime solution

var isPrime = function(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(9)); // returns false
console.log(isPrime(7)); // returns true
```

### `primes(max)`

```js
// use the isPrime function from the previous problem, defined again here

var isPrime = function(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

var primes = function(max) {
  for (var i = 2; i <= max; i += 1) {
    if (isPrime(i) === true) {
      console.log(i);
    }
  }
};

primes(100);
```

### `filter`

```js
var filter = function(arr, callback) {
  var newArr = [];
    for(var i=0; i<arr.length; i++) {
      if (callback(arr[i])){
        newArr.push(arr[i]);
      }
    }
  return newArr;
}

var isOdd = function(num) { 	
	return num % 2 !== 0;
};

filter ([0,1,2,3,4,5], isOdd);
// returns [1, 3, 5]

filter ([8,6,7,5,3,0,9], isPrime);
// returns [7,5,3]
```
