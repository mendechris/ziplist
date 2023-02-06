const letters = ['a', 'b', 'c'];
const nums = [1, 2, 3];

function ziplist(arr1, arr2) {
  const joinedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    joinedArr.push(arr1[i]);
    joinedArr.push(arr2[i]);
  }
  return joinedArr;
}

console.log(ziplist(letters, nums));

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipListTheSimpleWay(letters, nums));
