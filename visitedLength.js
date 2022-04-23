//문제링크 https://programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  //LOOK UP TABLE 활용
  const DIR = {
    U: [1, 0],
    D: [-1, 0],
    L: [0, -1],
    R: [0, 1]
  };
  let now = [0, 0];
  let visited = [];

  for (let i = 0; i < dirs.length; i++) {
    let newRow = now[0] + DIR[dirs[i]][0];
    let newCol = now[1] + DIR[dirs[i]][1];

    if (newRow > 5 || newCol > 5 || newRow < -5 || newCol < -5) continue;

    let move1 = "" + now[0] + now[1] + newRow + newCol;
    let move2 = "" + newRow + newCol + now[0] + now[1];

    if (visited.indexOf(move1) === -1) {
      visited.push(move1);
      visited.push(move2);
    }
    now = [newRow, newCol];
    // console.log(`now=${now}, visited=${visited}`)
  }
  return visited.length / 2;
}

let output = solution("ULURRDLLU");
console.log(output); //7
