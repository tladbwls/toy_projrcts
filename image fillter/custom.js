// const btns = document.querySelectorAll(".filter-btns .filter-btn");

// function activeTabs(idx) {
//   for (let i = 0; i < btns.length; i++) {
//     btns[i].classList.remove("active");
//   }

//   btns[idx].classList.add("active");

//   console.log(idx);
// }

// for (let i = 0; i < btns.length; i++) {
//   const btn = btns[i];

//   btn.addEventListener("click", () => {
//     activeTabs(i);
//   });
// }

const activeBtn = (e) => {
  //   console.log(e.target);
  const target = e.target;
  filterBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  target.classList.add("active");
};

const filterBtn = document.querySelectorAll(".filter-btn");
// console.log(filterBtn);
filterBtn.forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", activeBtn);
});
