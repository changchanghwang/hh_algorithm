const participant = ['leo', 'kiki', 'eden'];
const completion = ['eden', 'kiki'];

function solution(participant, completion) {
  const obj = {};

  for (let i = 0; i < participant.length; i++) {
    const part = participant[i];
    const comp = completion[i];

    obj[part] = obj[part] ? obj[part] + 1 : 1; // 참가자명단에 있으면 +1
    obj[comp] = obj[comp] ? obj[comp] - 1 : -1; // 완료명단에 있으면 -1
  }

  for (const key in obj) {
    if (obj[key] > 0) return key; // 참가자 명단에 있지만 완료명단에 없는사람은 +_
  }
}

console.log(solution(participant, completion));
