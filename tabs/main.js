//1. 버튼 요소 선택
const btns = document.querySelectorAll(".btns .btn");
const panels = document.querySelectorAll(".panels .panel");

//4. 각각의 버튼 클릭 시 active 클래스 추가 : activeTabs 함수 정의
function activeTabs(idx) {
  //3번 과정에서 전달된 i 파라미터는 idx에 저장
  //   console.log(idx);
  //   console.log(btns[idx]);
  // 5번 :각각의 버튼을 반복문으로 추출하여 전체 요소의 active 클래스 제거
  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.classList.remove("active");
  }
  //7번: 전체 패널을 반복문으로 각각 추출하여 display값 none 으로 변경(버튼 클릭시 실행)
  for (let i = 0; i < panels.length; i++) {
    panels[i].style.display = "none";
  }
  //8번 : 패널 3개 중 idx로 전달받은 패널의 요소애먼 display를 block으로 변경
  panels[idx].style.display = "block";
  // 6번 : 전달 받은 idx를 인덱스로 하는 버튼(클릭하는 대상)에만 active 클래스 추가
  btns[idx].classList.add("active");
}

//2. 반복문으로 버튼 요소 추출 : 버튼 개를 반복문으로 각각 추출한다.
for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  //   console.log(btn);

  //3.  버튼 클릭 시 전체 active 클래스 삭제 : 각각 추출된 버튼 요소를 클릭했을 때 activeTabs함수 실행
  btn.addEventListener("click", () => {
    activeTabs(i); //함수의 파라미터로 i 인덱스 전달 ex) 첫번째 탭 클릭 시 0 전달, 두 번째 탭 클릭시 1 전달...
  });
}
