// a 에는 숫자 또는 문자열이 들어올 수 있다고 지정
function clean(a: (number | string)[]) {
  // cleanig 빈 배열을 하나 만들어줌
  let cleaning: number[] = [];
  // a 반복문을 돌림
  a.forEach((b) => {
    // a 안에 있던 하나하나의 자료가 b 라는 파라미터로 나옴
    // string 타입이면 숫자로 바꾸고parseFloat 클리닝 된 것을 array 에 push
    if (typeof b === "string") {
      cleaning.push(parseFloat(b));
      // 그냥 number 타입이면 바로 cleaing 빈 배열에 넣어줌
    } else {
      cleaning.push(b);
    }
  });

  return cleaning;
}
console.log(clean([123, "3"])); // [123,3]

// 예제2
// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }

// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.
// 철수쌤같은 선생님 object 자료를 집어넣으면
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다.

// (동작예시)
// 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
// 만들함수({ subject: ["science", "art", "korean"] }); //이 경우 'korean'을 return
// 만들함수({ hello: "hi" }); //이 경우 타입에러 나면 됩니다

function 만들함수(x: { subject: string | string[] }) {
  // x.subject 라는 파라미터는 케이스가 2개니까 if문을 두개 썼는데 안전하게 마지막 else 문도 추가
  if (typeof x.subject === "string") {
    return x.subject;
    //  이 변수가 array 자료인지 확인하려면 typeof 이거는 못사용하고 Array.isArray() 사용
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "없쪄";
  }
}

console.log(만들함수({ subject: ["english", "art"] }));

// ?? x.subject 는 왜 나올 수 있는 것일까 ?
