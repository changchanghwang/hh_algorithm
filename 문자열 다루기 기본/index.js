const s = '1e34';

function solution(s) {
  let answer;
  if (s.length === 4 || s.length === 6) {
    // 숫자가 아닌 애들을 제거하고 length비교 'a234' -> '234'
    answer = s.replace(/[^0-9]/, '').length === s.length;
  } else {
    answer = false;
  }
  return answer;
}

function solution2(s) {
  return /^\d{4}$|^\d{6}$/.test(s); // regex를 이용한 문제풀이법
}

function solution3(s) {
  let answer;
  if (s.length === 4 || s.length === 6) {
    /**
     * string.split('')으로 한글자씩 배열로 만듬
     * @example '1e34' -> ['1','e','3','4']
     * every는 모든 return값이 true여야함.
     */
    answer = s.split('').every((e) => !isNaN(Number(e)));
  } else {
    answer = false;
  }
  return answer;
}

function solution4(s) {
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) return false;
    }
  } else {
    return false;
  }
  return true;
}

console.log(solution4(s));
