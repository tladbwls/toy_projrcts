//1. 요소의 선택
const btn = document.querySelector(".btn");
const lists = document.querySelector(".lists");

//2. addTodo 함수를 정의
const addTodo = () => {
  //4. 입력창에 값을 저장
  const input = document.querySelector(".input");
  const inputTxt = input.value;

  //6. 빈값 입력 시 경고 메세지
  if (!inputTxt) {
    alert("메세지를 입력해주세요.");
    return;
  }
  //7. 입력된 값이 적용된 li 요소 저장

  const liContents = `  <li>
                            <p>
                                ${inputTxt}
                            </p>
                            <span class="delete-icon">
                            <i class="ri-delete-bin-5-fill"></i></span>
                        </li> `;

  //8. 입력 요소를 가장 위에 위치시킨다.
  lists.insertAdjacentHTML("afterbegin", liContents);
  //   alert(liContents);

  // alert(inputTxt);
  //5. 입력이 끝나면 입력창 비움
  input.value = "";

  //   //9. 삭제 버튼은 문자열 입력이 완료된 이후에 감지할 수 있기 때문에 문자 입력 이후에요소를 저장한다.
  //   const deleteBtn = document.querySelectorAll(".delete-icon");
  //   const lis = document.querySelectorAll("li");
  //   //   console.log(deleteBtn);

  //   //10. 반목문으로 삭제 요소 선택 후 클릭 시 삭제
  //   deleteBtn.forEach((item) => {
  //     item.addEventListener("click", () => {
  //       item.parentNode.remove();
  //     });
  //   });

  //   //11. 임시 완료 기능
  //   lis.forEach((li) => {
  //     li.addEventListener("click", () => {
  //       li.classList.toggle("complete");
  //     });
  //   });
};

//3. 버튼을 클릭했을 때 addTodo 함수 실행
btn.addEventListener("click", addTodo);
addTodo();

//11. 임시 완료 기능
const activeClick = (e) => {
  //   console.log(e.target.tagName);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("complete");
  } else if (e.target.tagName === "I") {
    e.target.parentNode.parentNode.remove();
  }
};

lists.addEventListener("click", activeClick);
