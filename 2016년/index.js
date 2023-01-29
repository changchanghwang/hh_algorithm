const a = 5;
const b = 24;

function solution(a, b) {
  // date = Tue May 24 2016 00:00:00 GMT+0900
  const date = new Date(2016, a - 1, b); // 자바스크립트에서 월은 0~11까지임
  return date.toString().split(' ')[0].toUpperCase();
}
// 'Tue May 24 2016 00:00:00 GMT+0900'
// ['Tue', 'May', '24', '2016', '00:00:00', 'GMT+0900']
// 'Tue'
// 'TUE'

console.log(solution(a, b));
