//문제링크
//https://www.notion.so/Power-4c01ca0e8906440987951cce81eb48b9

function power(base, exponent) {
  if (exponent === 0) return 1;

  if (exponent % 2 === 0) {
    const half = exponent / 2;
    const temp = power(base, half) % 94906249;
    const result = temp * temp;
    return result % 94906249;
  }

  if (exponent % 2 === 1) {
    const half = Math.floor(exponent / 2);
    const temp = power(base, half) % 94906249;
    const result = temp * temp;
    return ((result % 94906249) * base) % 94906249;
  }
}

let output = power(3, 40);
console.log(output); // --> 19334827
