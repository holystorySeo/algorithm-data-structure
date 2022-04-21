//문제링크
//https://www.notion.so/Stack-a22d8acaa94b41bfae726cf033023bbb

function browserStack(actions, start) {
  // start 인자가 string이 아닌 것들은 전부 false로 리턴합니다.
  if (typeof start !== "string") return false;

  // 뒤로 가기와 앞으로 가기 스택의 변수를 설정합니다
  let prevStack = [];
  let nextStack = [];
  let current = start;

  // actions 배열을 전부 탐색하기 위해 반복문을 설정합니다.
  for (let i = 0; i < actions.length; i++) {
    // 만약 actions 배열의 요소가 -1이고(뒤로가기를 눌렀고), prevStack의 길이가 0이 아닐 때(이전으로 돌아가는 페이지가 있다면)
    if (actions[i] === -1 && prevStack.length !== 0) {
      // prevStack에서 pop한 요소를 prevPage로 할당합니다.
      // nextStack에 current를 삽입합니다.
      // current를 prevPage에 할당합니다.
      let prevPage = prevStack.pop();
      nextStack.push(current);
      current = prevPage;

      // 만약 actions 배열의 요소가 1이고(앞으로가기를 눌렀고), nextStack의 길이가 0이 아닐 때(다음으로 넘어가는 페이지가 있다면)
    } else if (actions[i] === 1 && nextStack.length !== 0) {
      // nextStack에서 pop한 요소를 nextPage로 할당합니다.
      // prevStack에 current를 삽입합니다.
      // current를 nextPage에 할당합니다.
      let nextPage = nextStack.pop();
      prevStack.push(current);
      current = nextPage;

      // 만약 actions 배열의 요소가 알파벳이라면 (새로운 페이지라면)
    } else if (typeof actions[i] === "string") {
      // prevStack에 current를 삽입합니다.
      // current에 현재 알파벳 요소를 할당합니다.
      // 새로운 페이지는 앞으로 갈 수 없기 때문에 nextStack을 비웁니다.
      prevStack.push(current);
      current = actions[i];
      nextStack = [];
    }

    // 이외엔, 동작하지 않습니다.
  }

  // 배열에 prevStack, current, nextStack을 순서대로 담아 반환합니다.
  return [prevStack, current, nextStack];
}

//입출력 예시
const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
const start = "A";
const output = browserStack(actions, start);

console.log(output); // [["A"], "B", ["A", "D"]]

const actions2 = ["B", -1, "B", "A", "C", -1, -1, "D", -1, 1, "E", -1, -1, 1];
const start2 = "A";
const output2 = browserStack(actions2, start2);

console.log(output2); // [["A", "B"], "D", ["E"]]
