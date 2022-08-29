/*
[문제]
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 소수이면 그 소수를 출력하는 프로그램을 작성하세요.

예시) 
* 32를 뒤집으면 23, 23은 소수. => 23 출력
* 910 뒤집으면 19 => 첫 자리부터 연속된 0 무시
*/

// 소수판별 알고리즘
const isPrime = num => {
  // 인자로 들어온 num === filteredArr에서 전달되는 각 배열의 숫자 n
  // 1 이하일 경우 소수가 아니므로 false
  if (num <= 1) return false;

  // 제곱근까지 비교하여 나누어떨어지는 수가 있는지 확인
  // 12 => 1*12 / 2*6 / 3*4 / 4*3/ 6*2 ... => 4까지 확인하면 나머지 숫자는 같은 숫자의 반복이므로 상관없다.
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// 필터링 알고리즘
const reversePrime = arr => {
  // map => 뒤집은 숫자 배열
  // filter => isPrime에 해당하는 숫자만 모음
  const filteredArr = arr
    .map(num => {
      return Number(String(num).split('').reverse().join(''));
    })
    .filter(num => isPrime(num));

  // filteredArr을 순회하며 출력
  filteredArr.forEach(num => console.log(num));
};

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
const N = arr.lenght;
let result = reversePrime(arr);
console.log(result);

/*
[풀이 과정]

* 시도 1
- 각 자연수를 뒤집은 숫자를 만든다.
... 뒤집을 때 메서드를 사용했는데 다른 방법은 없는가..??
- 각 수가 소수인지 판별 : 소수 판별 알고리즘을 만든다.
- 소수 판별 알고리즘? 2 ~ 각 수의 제곱근까지와 비교해 나뉘어 떨어지는것이 있는지 판별.



*/
