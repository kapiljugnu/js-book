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
    const temp = arr[0];
    let j = 0;
    for (; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[j] = temp;
  }
  return arr;
}

/*
Time Complexity : O(n)
*/
function usingReverseArray(arr, degree) {
  function reverse(start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  reverse(0, degree - 1);
  reverse(degree, arr.length - 1);
  reverse(0, arr.length - 1);
  return arr;
}

const list = [1, 2, 3, 4, 5, 6, 7],
  degree = 2;
console.log(`usingTemp=>`, usingTemp([...list], degree));
console.log(`shiftingOneByOne=>`,shiftingOneByOne([...list], degree));
console.log(`usingReverseArray=>`,usingReverseArray([...list], degree));
