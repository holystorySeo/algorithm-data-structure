//문제 링크
//https://www.notion.so/DFS-e9fb57f363d64190a75eda58b7223a69

function barcode(len) {
  function isValid(str) {
    let half = Math.floor(str.length / 2);
    for (let i = 1; i <= half; i++) {
      if (str.slice(-i) === str.slice(-2 * i, -i)) return false;
    }
    return true;
  }

  function makeBarcode(str) {
    if (str.length === len) return str;
    // 💡 재귀 탈출의 base case: 원하는 길이의 유효한 바코드
    for (let i = 1; i <= 3; i++) {
      if (isValid(str + i)) {
        // 유효한 바코드에 i를 붙인 것이 유효성 검사를 통과 한다면
        let minBarcode = makeBarcode(str + i);
        if (minBarcode) return minBarcode;
        // 가능한 것을 찾으면 다른 경우는 찾지말고 바로 반환하라!
        // 이 조건문으로 최소값을 리턴할 수 있다!!
      }
    }
  }
  return makeBarcode("1");
}

//입출력 예시
let output = barcode(3);
console.log(output); // "121"

output = barcode(7);
console.log(output); // "1213121"

output = barcode(20);
console.log(output); // "12131231321231213123"
