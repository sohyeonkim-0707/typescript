// 연습 문제
// 1번
function 자릿수세기(x: number | string): number {
  return x.toString.length;
}
// length 를 붙이면 자릿수를 세준다. 근데 숫자는 length를 붙일 수 없음
// 숫자 > 문자 변환 toString
// 변환하는 함수도 toString
// 만약 x가 숫자일 경우 이렇게 문자일 경우 이렇게 하라고 코드 짜는 것이 좋다.

// 2번) 결혼 가능 확률을 알려주는 함수를 만들어보자.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

// function 결혼가능하냐(월소득: number, 집보유여부: boolean, 매력점수: string):string | void {
//   let score = 0;
//   if (월소득 >= 10000) {
//     score++;
//   }
//   if ((집보유여부 = true)) {
//     score = score + 500;
//   } else {
//     score = 0;
//   }
//   if (매력점수 === "상") {
//     score = score + 100;
//   }
//   if (score >= 600) {
//     return "결혼가능";
//   }
// }

function 결혼가능하냐(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(결혼가능하냐(100, true, "상"));
