const arr1 = [
  [1, 2],
  [2, 3],
];

const arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const arr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      console.log('arr1의 원소', arr1[i][j]);
      console.log('arr2의 원소', arr2[i][j]);
      console.log('덧셈', arr1[i][j] + arr2[i][j]);
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(arr);
    console.log('answer', answer);
  }
  return answer;
}

function solution2(arr1, arr2) {
  return arr1.map((row, i) => row.map((element, j) => element + arr2[i][j]));
}

console.log(solution2(arr1, arr2));
