/*
[문제]
현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가
여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려
고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력
하는 프로그램을 작성하세요.
만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값
은 22입니다.

*/

function kLargestNum(N, K, cards) {
  cards.sort((a, b) => b - a);
  let sums = [];
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        if (sums.length < K) sums.push(cards[i] + cards[j] + cards[k]);
        else break;
      }
    }
  }
  return sums[K - 1];
}

const N = 10; // cards.length
const K = 3;
const cards = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

const result = kLargestNum(N, K, cards);
console.log(result);

/*
[풀이과정]

* 시도1
- 3중 for문... 을 사용해서 각 숫자 조합을 만들고 배열에 입력한다. 
... 숫자를 내림차순으로 정렬하면 k번째 숫자가 더 빨리 나오지 않을까?
... 배열의 길이가 k를 넘어가는 순간 반복문을 중지하고 리턴.


*/
