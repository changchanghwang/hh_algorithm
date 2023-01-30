const s = 'Hello  eVeryone ';

function solution(s) {
  const splittedString = s.split(' ');
  return splittedString
    .map((string) => {
      const elements = string.split('');
      return elements
        .map((e, i) => {
          if (i % 2 === 0) {
            return e.toUpperCase();
          }
          return e;
        })
        .join('');
    })
    .join(' ');
}

function solution2(s) {
  let answer = '';
  const splittedString = s.split(' '); // ['try','hello','world']
  for (let i = 0; i < splittedString.length; i++) {
    /**
     * ['t','r','y']
     * ['h','e','l','l','o']
     * ['w','o','r','l','d']
     */
    const splittedEl = splittedString[i].split('');
    for (let j = 0; j < splittedEl.length; j++) {
      if (j % 2 === 0) {
        answer += splittedEl[j].toUpperCase();
      } else {
        answer += splittedEl[j].toLowerCase();
      }
    }
    if (i !== splittedString.length - 1) answer += ' ';
  }
  return answer;
}

console.log(solution2(s));
