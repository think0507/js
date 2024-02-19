//숫자 최댓값 입력 받기
let maxNum  = prompt("숫자 맞추기 게임입니다. 최대값을 입력하세요 (종료 = 'q')")

while (!parseInt(maxNum)) {
    //종료 조건 만들어주기
    if(maxNum === 'q'){
        console.log("게임실행을 취소합니다");
        break;
    }
    maxNum = prompt("입력오류! 유효한 숫자값을 입력해주세요 (종료 = 'q')")
}
if(maxNum === 'q'){
    console.log("game set");
}else{
    // 게임 시작 안내 문구 출력
    alert(`숫자 맞추기 게임을 시작합니다. \n (1~${maxNum}까지의 숫자를 맞춰보세용)`)
}
let randNum = Math.floor(Math.random() * maxNum) + 1;
let count = 0;
while(true){
    console.log(randNum)
    let result = prompt("result?")
    if(parseInt(result) === randNum){
        alert("correct!")
        alert(`your count = ${count}`)
        break;
    }else{
        if(parseInt(result)<randNum){
            alert("up")
        }else if (parseInt(result)>randNum){
            alert("down")
        }
    }
    count++;
}