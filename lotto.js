/*로또 번호 생성기
1. 유일한 값을 추출, Set 사용
2. getRandomNumber함수에 변수를 전달 과정에서 destructuring을 사용*/

const SETTING = {
    name: "LUCKY LOTTO!",
    count: 6,
    maxNumber: 45
}

let { count, maxNumber } = SETTING;

function getLottoNumbers(count, maxNumber) {
    const myLotto = new Set();
    while (myLotto.size !== count) {
        myLotto.add(getRandomNumber(maxNumber))
    }
    return myLotto;
}
console.log(getLottoNumbers(count, maxNumber))

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber + 1)
}