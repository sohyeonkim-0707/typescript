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
const 출생지역 = "seoul";
// 문자가 아니라 오브젝트를 지정하면 오브젝트 안에 잇는 자료는 바뀌지 못하나
