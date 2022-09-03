/*
[문제]
현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가
여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려
고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력
하는 프로그램을 작성하세요.
만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값
은 22입니다.

[출력]
K번째 수가 존재하지 않으면 -1을 출력한다.

*/

function kLargestNum(N, K, cards) {
  // cards 배열 내림차순 정렬
  cards.sort((a, b) => b - a);

  // 3개를 뽑은 합계를 담을 배열 sums
  let sums = [];

  // 숫자를 3회 뽑아야 하므로, for문을 3번 돈다. 중복 방지를 위해서 각각 0, 1, 2 순서로 진행.
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        // 3번째 for문에서 각 순서대로 뽑힌 카드를 더한 값을 배열에 담아준다.
        sums.push(cards[i] + cards[j] + cards[k]);
      }
    }
  }
  // 3번째로 '큰' 값, 즉 중복을 제외한 값이어야 하기 때문에 set을 사용해 중복제거 후 다시 배열로 변환
  sums = [...new Set(sums)];

  // 해당 배열에 K번째 큰 수가 존재하면 리턴하고 아닐 경우 -1을 리턴
  return sums[K - 1] ? sums[K - 1] : -1;
}

const N = 10; // cards.length
const K = 3;
const cards = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

const result1 = kLargestNum(N, K, cards);
// console.log(result1);

/*
[풀이과정]

* 시도1
- 3중 for문... 을 사용해서 각 숫자 조합을 만들고 배열에 입력한다. 
... 숫자를 내림차순으로 정렬하면 k번째 숫자가 더 빨리 나오지 않을까?
... 배열의 길이가 k를 넘어가는 순간 반복문을 중지하고 리턴.
=> 중복된 값이 있다는 것을 미처 생각하지 못했다! 다시 수정했음

* 시도2
- 3중 for문으로 모든 경우를 배열에 담은 뒤 Set으로 중복을 제거하고 해당하는 인덱스로 접근하여 리턴.
*/

function answer(N, K, cards) {
  // 3개를 뽑은 합이 중복되지 않고 추가되도록 Set을 생성한다.
  let sums = new Set();

  // 반복을 3중으로 돌아서 중복되지 않는 모든 경우의 조합을 만든다.
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        // Set 에 add 메서드를 사용해 합계를 추가할 수 있다.
        sums.add(cards[i] + cards[j] + cards[k]);
        console.log(i, j, k);
      }
    }
  }

  // K번째 큰 수를 출력하는 것이므로 sums를 배열로 변환하고 내림차순 정렬한 후 출력한다.
  sums = [...sums].sort((a, b) => b - a);
  return sums[K - 1] ? sums[K - 1] : -1;
}
const result2 = answer(N, K, cards);
console.log(result2);

/*
[Set 자료구조 정리]
- '중복되지 않는 유일한 값들의 집합'이다. set 안에 존재하는 한 값은 유일한 값이다.
- 이터러블한 자료구조로 반복할 수 있지만, 순서에 의미가 없고 그렇기 때문에 index 개념도 없다.
- set.size : 요소의 갯수를 확인
- set.add(el) : 요소 추가
- set.has(el) : el 이 set에 존재하는지 여부를 확인할 수 있다.(boolean 값 리턴)
- set.delete(el) : el이 set에 존재할 경우 삭제하고, 삭제 여부에 대한 boolean 값을 리턴한다.
- set.clear() : 전체 요소를 삭제할 수 있고, undefined를 반환한다.
- for...of나 forEach 메서드로 순회할 수 있다. forEach를 사용했을 때 두 번째 인자는 index 대신 해당 요소임.
*/
