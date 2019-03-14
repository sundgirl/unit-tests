const fact = function(n) {
  return n !== 1 && n !== 0 ? n * fact(n - 1) : 1;
}

module.exports.secondCondition = function(argv) {
  const newArray = argv.filter((n, index) => n > 2 ** index && n < fact(index));
  return newArray.length;
}

module.exports.firstCondition = function(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[0] && array[i] < array[i + 1] / 2) {
      newArray.push(array[i]);
    }
    if (array[array.length - 1] < array[array.length - 2] / 2) {
      newArray.push(array[i]);
    }
    if (array[i] < (array[i - 1] + array[i + 1]) / 2) {
      newArray.push(array[i]);
    }
  }
  return newArray.length;
}
