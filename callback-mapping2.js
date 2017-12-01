var words = ["Brandon", "is", "one", "great", "programmer"];

function map(arr, callback) {
  var newArr = [];
  for(var i = 0; i < words.length; i++) {
    var index = arr[i];
    newArr.push(callback(index))
  }
  return newArr;
}

var length = map(words, function(words) {
  return words.length;
});

console.log(length);
console.log("==========");

var uppercase = map(words, function(words) {
  return words.toUpperCase();
});

console.log(uppercase);
console.log("==========");

var reverse = map(words, function(words) {
  return words.split('').reverse().join('');
});

console.log(reverse);
console.log("==========");
