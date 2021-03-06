
// 테스트 유닛들의 모음
describe('자스민 테스트 입니다', () => {
    // 테스트 유닛입니다.
    it('덧셈을 하는 함수입니다.', () => {
        let num = 10;

        // expect : 실행할 함수의 결과값을 인수로 전달한다. 기대식
        // toBe : 내가 기대한 결과가 일치하는지 판단하는 함수
        // expect(plusOne(num)).toBe(11); // 이놈보다 밑의 놈이 낫지
        expect(plusOne(num)).toBe(num + 1); // 이렇게 더 좋게 해주는게 리팩토링 단계
    })
})