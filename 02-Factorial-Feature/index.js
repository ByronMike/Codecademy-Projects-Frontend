const Calculate = {
  factorial(input) {
    if (input === 0) {
      return 1;
    }
    let arr = [];
    for (let i = input; i > 0; i--) {
      arr.push(i);
    }
    let result = arr.reduce((a, b) => a * b);
    return result;
  },
};

module.exports = Calculate;
