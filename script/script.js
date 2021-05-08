const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const errMess = document.querySelector(".errMessage");
const btn = document.querySelector(".form__btn");

function checkEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}

function checkInput() {
  if (checkEmail(input.value) === false) {
    form.classList.add("form--err");
    errMess.classList.add("errMessage--show");
  } else {
    form.classList.remove("form--err");
    errMess.classList.remove("errMessage--show");
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInput();
});
