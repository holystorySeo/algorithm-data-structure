//๋ฌธ์  ๋งํฌ
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
    // ๐ก ์ฌ๊ท ํ์ถ์ base case: ์ํ๋ ๊ธธ์ด์ ์ ํจํ ๋ฐ์ฝ๋
    for (let i = 1; i <= 3; i++) {
      if (isValid(str + i)) {
        // ์ ํจํ ๋ฐ์ฝ๋์ i๋ฅผ ๋ถ์ธ ๊ฒ์ด ์ ํจ์ฑ ๊ฒ์ฌ๋ฅผ ํต๊ณผ ํ๋ค๋ฉด
        let minBarcode = makeBarcode(str + i);
        if (minBarcode) return minBarcode;
        // ๊ฐ๋ฅํ ๊ฒ์ ์ฐพ์ผ๋ฉด ๋ค๋ฅธ ๊ฒฝ์ฐ๋ ์ฐพ์ง๋ง๊ณ  ๋ฐ๋ก ๋ฐํํ๋ผ!
        // ์ด ์กฐ๊ฑด๋ฌธ์ผ๋ก ์ต์๊ฐ์ ๋ฆฌํดํ  ์ ์๋ค!!
      }
    }
  }
  return makeBarcode("1");
}

//์์ถ๋ ฅ ์์
let output = barcode(3);
console.log(output); // "121"

output = barcode(7);
console.log(output); // "1213121"

output = barcode(20);
console.log(output); // "12131231321231213123"
