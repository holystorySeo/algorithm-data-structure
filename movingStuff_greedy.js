//문제링크
//https://www.notion.so/Greedy-7d69451df7b14588acb1a5bd21cf02df

function movingStuff(stuff, limit) {
  let twoBoxCount = 0;
  let oneBoxCount = 0;

  stuff.sort((a, b) => a - b);

  while (stuff.length > 0) {
    if (stuff[stuff.length - 1] + stuff[0] <= limit) {
      twoBoxCount++;
      stuff.splice(0, 1);
      stuff.splice(stuff.length - 1, 1);
    } else {
      oneBoxCount++;
      stuff.splice(stuff.length - 1, 1);
    }
  }
  return twoBoxCount + oneBoxCount;
}

let output = movingStuff(
  [60, 73, 80, 87, 103, 109, 119, 123, 128, 129, 136, 146, 153, 168, 182],
  200
);
console.log(output); // 11
