const s = 'Hello  eVeryone ';

function solution(s) {
  const splittedString = s.split(' ');
  //['Hello', 'eVeryOne']
  return (
    splittedString
      .map((string) => {
        const elements = string.split('');
        //['H','e','l','l','o']
        // [e,V,e,r,y,O,n,e]
        return (
          elements
            .map((e, i) => {
              if (i % 2 === 0) {
                return e.toUpperCase();
              }
              return e.toLowerCase();
            }) //['H','e','L','l','O']
            // [E,v,E,r,Y,o,N,e]
            .join('')
        ); // 'HeLlO'
        // 'EvErYoNe'
      })
      // ['HeLlO','EvErYoNe']
      .join(' ')
    // 'HeLlo EvErYoNe'
  );
}
//Hello WoRld

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
