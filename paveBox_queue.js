//문제링크
//https://www.notion.so/Queue-33ee45af9b1a4b1a8cd2978a3f1f1f0c

function paveBox(boxes) {
  let result = [];

  while (boxes.length > 0) {
    const index = boxes.findIndex((fn) => boxes[0] < fn);

    if (index === -1) {
      //boxes[0]보다 큰게 없다면 모든 배열을 result로 옮기고 boxes는 비운다.
      result.push(boxes.length);
      boxes.splice(0, boxes.length);
    } else {
      let arr = boxes.splice(0, index);
      result.push(arr.length);
    }
  }
  return Math.max(...result);
}

//입출력 예시
const boxes = [5, 1, 4, 6];
const output = paveBox(boxes);
console.log(output); // 3

const boxes2 = [1, 5, 7, 9];
const output2 = paveBox(boxes2);
console.log(output2); // 1
