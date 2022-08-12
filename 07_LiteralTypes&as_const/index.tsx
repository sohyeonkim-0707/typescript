// 1)
// 변수 이름에 더 엄격하게 타입 지정하기
// ex) kim or park 만 들어올 수 있도록 > literal types

let 이름: 123; // 이름이라는 변수에는 123만 들어올 수 있다.
// 이름 = 456 //error

// 2) 개인정보를 저장해보자
let 개인정보: "김소현" | "서울";

개인정보 = "김소현";
개인정보 = "서울";

// Literal types 을 쓰는 이유 ?
// [1] 변수에 뭐가 들어올지 더 엄격하게 관리가 가능하다

// 3) 함수
// 파라미터와 리턴값에도 Literal types 지정 가능
function 함수(a: "hello"): 1 | 0 {
  return 0;
  //   return 5; //error
}
함수("hello");

// 4) 연습문제
// [1] 가위 or 바위 or 보 중 1개 입력가능
// [2] 가위 or 바위 or 보 만 들어올 수 있는 arrary를 리턴해라
// function 게임(x: "가위" | "바위" | "보"): "가위" | "바위" | "보"[] {
//   return ["가위"];
// }

function 게임(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}
게임("가위");

// 5) const 변수의 한계
// const 변하지 않는 값을 2개 이상 저장할 수 없음
// literal types은 자료를 여러개 저장할 수 있게 된 const 변수의 업그레이드 버전이라고 생각하면 된다.

// 6) literal types의 문제점
var 자료 = {
  name: "kim",
};
자료.name; //"kim"

function 내함수(a: "kim") {}
// 내함수("kim");
내함수(자료.name); //error why ?
// a라는 타입에 "kim" 이라는 '자료'만 들어올 수 있습니다 x  >>> 자료.name 은 type 이 string
// a라는 타입에 "kim" 이라는 '타입'만 들어올 수 있습니다 x

// 해결 방법은 ?
// [1] 오브젝트를 만들때 미리 타입을 지정한다.
// [2] as 문법을 쓴다.
// [3] 오브젝트를 만들 때 as const 를 붙인다

// 7) as const 는 무엇인가?
// object value 값을 그대로 타입으로 지정해준다.
// object 속성들에 모두 readonly를 붙여준다. (object 속성을 마음대로 바꿀 수 없다 !!! )
// object 자료를 완전히 잠구고 싶으면 as const 를 쓰면 된다.
// as const 쓰기 싫으면 아예 자료2:{} 타입을 부여해줘야한다.

var 자료2 = {
  name2: "lee",
} as const;

function 내함수2(a: "lee") {}
내함수2(자료2.name2); // 이제 무조건 "lee" 타입
// 자료2.name2 =123 //읽기 전용 속성이므로 'name2'에 할당할 수 없습니다.
