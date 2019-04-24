// O(n)
function usingTemp(arr, degree) {
  const temp = [];
  for (let i = degree; i < arr.length; i++) {
    temp.push(arr[i]);
  }
  for (let i = 0; i < degree; i++) {
    temp.push(arr[i]);
  }
  return temp;
}

// O(n*d)
function shiftingOneByOne(arr, degree) {
  for (let i = 0; i < degree; i++) {
    const temp = arr[i];
    let j = 0;
    for (; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[j] = temp;
  }
  return arr;
}

console.log(usingTemp([1, 2, 3, 4, 5, 6, 7], 2));
console.log(shiftingOneByOne([1, 2, 3, 4, 5, 6, 7], 2));
