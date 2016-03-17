var sillySum = function(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i ++) {
    total += arr[i] * i;
  }
  return total;
};

var myArray = [1, 2, 3];
console.log(sillySum(myArray));


//isPrime
var isPrime = function(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i ++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(8));


//filter
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
