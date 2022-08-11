// 타입이 너무 길고 복잡하면 변수에 담아서 쓸 수 있다.
// type 키워드 사용하기 type alias (타입변수)

// 1)
// type Animal = string | number | undefined;
// let 동물: string | number | undefined;
// let 동물: Animal = 123
// let 동물: Animal = "고양이"
// let 동물: Animal = "";

//2)
// 타입 변수에는 유니언 타입 뿐 만아니라 오브젝트 타입도 저장해서 쓸 수 있다.
// let 동물: { name: string; age: number } = { name: "kim", age: 20 };
// 위는 너무 복잡하니 타이변수로 만들어서 사용해보자.

// type Animal = { name: string; age: number };
// let 동물: Animal = { name: "kim", age: 20 };

// 타입 변수를 만들 때 작명을 신경써야한다.
// 영어 대문자로 시작하는 거나 단어 뒤에 Type을 붙인다 관례 > 일반 변수랑 차이를 주기 위해
// type AnimalType = { name: string; age: number };

// 3) const
const 출생지역 = { region: "seoul" };
// 오브젝트 안에 있는 자료는 변경할 수 없는데 변경 가능하다.
// 왜 ? const 변수는 재할당을 금지하는 키워드지 안에 있는 오브젝트 수정을 막는 키워드가 아니기 때문이다.
출생지역.region = "busan";
// 하지만 타입스크립트를 쓰면 변경 못하게 막을 수 있다. 그러나 타입스크립트 파일안에서만 작동하지 실재 자바스크립트 파일에서는 막아주지 않음 (에러없음)

// [1] 타입 키워드를 이용해서 미리 타입을 정의한다.
// [2] readonly 를 쓰면 오브젝트 자료 수정도 막을 수 있다. (읽기전용)
// type Morning = {
//   readonly name: string; // 수정못함
// };

// const 아침: Morning = {
//   name: "햇살",
// };
// 아침.name = "먹구름"; // error : 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
// 하지만 타입스크립트 에러는 에디터 & 터미널에만 존재한다.

//4)
// ? 를 쓰면 옵션 파라미터를 지정할 수 있다. nmae 속성은 선택사항 ! 들어돠도 되고, 안들어와도 됨 !
type Morning = {
  name?: string;
};

// ? 의 의미는 undefined 가 들어올 수 있다라는 것의 약자
// type Morning = {
//     name: string | undefined
//   };

// 5) type 키워드를 여러개로 합칠 수 있다.
type Name = string;
type Age = number;
// 위 두개를 합쳐보자
// union type 사용

type Person = Name | Age; // Person 타입에는 string 와 number가 들어올 수 있다.

// 6)
type PositionX = { x: number };
type PositionY = { y: number };
// 위 두개를 오른쪽 처럼 만들어보자. { x: number, y: number }
// 오브젝트로 선언된 두 타입의 안에 있는 속성을 합쳐보자 & 기호 사용 > '& 연산자로 object 타입 extend 하기'
type NewType = PositionX & PositionY; // { x: number, y: number }
let position: NewType = { x: 10, y: 10 };

// 7) 타이변수 작성시 주의할 점
// 같은 이름의 type 변수는 재정의가 불가능하다!
